function qs(selector, all = false) {
   return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const sections = qs('.section', true);
const timeline = qs('.timeline');
const line = qs('.line');
const helem = document.getElementById('helement');

console.log(sections)
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * .9;

function hThree() {
   helem.innerHTML = "Qazaqi dästürler"
}

function scrollHandler(e) {
   const { scrollY } = window;
   up = scrollY < prevScrollY;
   console.log(up)
   
   down = !up;
   console.log(down)
   const timelineRect = timeline.getBoundingClientRect();
   const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

   const dist = targetY - timelineRect.top;
   console.log(dist);

   if(dist > 4) {
      hThree();
   }
   if (down && !full) {
      set = Math.max(set, dist);
      line.style.bottom = `calc(100% - ${set}px)`;
   }

   if (dist > timeline.offsetHeight + 90 && !full) {
      full = true;
      line.style.bottom = `-50px`;
   }

   sections.forEach(item => {
    // console.log(item);
    const rect = item.getBoundingClientRect(); //     console.log(rect);
      console.log(item)
   if (rect.top + item.offsetHeight / 2 < targetY) {
      item.classList.add('show-me');
   }
  }); // console.log(up, down);

   sprevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);