const genderBtn = document.getElementById('genderBtn');
const genderPicture = document.getElementById('genderPicture');
const shildehana = document.getElementById('shildehana');
const qyrqynansh = document.getElementById('qyrqynansh');
// console.log(qyrqynansh)
const sundettoiTitle = document.getElementById('sundettoiTitle');
const sundettoiP = document.getElementById('sundettoiP');
const atqaMingyzu = document.getElementById('atqaMingyzu');
const myLine = document.getElementById('line');
const att = document.getElementById('at');
console.log(att)
const screenBtn = document.getElementById('screenButton');
const screenBlock = document.getElementById('fullscreen-block');
let isFullScreen = false;

let typed = new Typed(".auto-input", {
   strings: ["Bala Salt-Dästürleri"],
   typeSpeed: 120,
   backSpeed: 0,
   loop: false
})
// Ūlttyq Salt-Dästürler

let typed1 = new Typed(".auto-input2", {
   strings: ["[ <span class='itls'>bʌlʌ</span> ]\xa0 | \xa0noun.  \xa0\xa0'child' or 'kid'"],
   typeSpeed: 50,
   backSpeed: 0,
   loop: false
})
// ulttıq

let typed11 = new Typed(".auto-input22", {
   strings: ["[ <span class='itls'>sʌlt-dæsturler</span> ]\xa0 | \xa0noun. \xa0\xa0'customs' or 'traditions'"],
   typeSpeed: 50,
   backSpeed: 0,
   loop: false
})

// let typed2 = new Typed(".desc", {
//    strings: ["There is no nation in the world that does not have its own traditions, which help passing on accumulated experience, knowledge, and achievements to the new generations. Traditions are of great importance in modernizing all spheres of culture and spiritual life, in realizing the efforts of future generations to make life richer, more beautiful, and more meaningful, in ensuring the continuity of the new and the old, in the harmonious development of society and the individual. Ingraining traditions helps to form socially necessary qualities, customs and and behavioral skills in people."],
//    typeSpeed: 10,
//    backSpeed: 0,
//    loop: false
// })

let typed3 = new Typed(".desc2", {
   strings: [`The project Qazaqi Dästürler serves educational and introductory purposes. `],
   typeSpeed: 40,
   backSpeed: 0,
   loop: false
});


// ********* FULL SCREEN ********* //


// document.onkeydown = function (e) {
//    e = e || window.event;
//    let keyCode = e.key;
//    if (isFullScreen) {
//       if(keyCode === 27) {
//          isFullScreen = false;
//          screenBtn.innerHTML = 'Fullscreen';
//       }
//    }
// }

// $(document).keyup(function(e) {
   
//      if (e.key === "27" && isFullScreen) { // escape key maps to keycode `27`
//          console.log("esc pressed")
//          isFullScreen = false;
//          screenBtn.innerHTML = 'Fullscreen';
//    }
// });

// document.addEventListener("keypressed", e => {
//    if (e.key === 27) {
//       console.log("ESC pressed!!")
//       isFullScreen = false;
//       screenBtn.innerHTML = 'Fullscreen';
//    }
// });

screenBlock.onclick = () => {
   if (!isFullScreen) {
      screenBtn.innerHTML = 'Exit Fullscreen';
      isFullScreen = true;
      openFullscreen();
   } else {
      screenBtn.innerHTML = 'Fullscreen';
      isFullScreen = false;
      closeFullscreen();
   }
};



/* Get the documentElement (<html>) to display the page in fullscreen */
      var elem = document.documentElement;

      /* View in fullscreen */
      function openFullscreen() {
         if (elem.requestFullscreen) {
            elem.requestFullscreen();
         } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
         } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
         }
      }

      /* Close fullscreen */
      function closeFullscreen() {
         if (document.exitFullscreen) {
            document.exitFullscreen();
         } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
         } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
         }
      }



function startTime() {
   const today = new Date();
   let h = today.getHours();
   let m = today.getMinutes();
   let s = today.getSeconds();
   m = checkTime(m);
   s = checkTime(s);
   document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
   setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
   return i;
}


let isGirl = false;

   genderBtn.onclick = () => {
   //  console.log(isGirl);
   if(isGirl){
   atqaMingyzu.style.display= "block";
   genderBtn.innerHTML = `<img src="/img/boy-btn.png" alt="">`;
   genderPicture.src = "/img/ul.png";
   isGirl = false;
   myLine.style.top ="-214px";
   //  shildehana.innerHTML = "Сүйінші хабарды жеткізгендер ұл туса – “ат ұстар” немесе “жылқышы” деп хабарлаған.";
   //  qyrqynansh.innerHTML = "Әдетте, ұл баланы 37- 39 күнде қырқынан шығарады";
   qyrqynansh.innerHTML = "for a boy, they celebrate it on 37–39th day.";
   sundettoiTitle.innerHTML = "Sündet toi";
   sundettoiP.innerHTML = `- a <span class="spanP">circumcision</span> ceremony for a <span class="spanP">boy of 4-5 years old.</span> It is considered to be one of the remarkable days of a boy's life. Relatives and friends of the family gather together, eat national cuisine, and have fun.`;

   } else {

   genderBtn.innerHTML = `<img src="/img/girl-btn.png" alt="">`;
   genderPicture.src = "/img/qyz.png";
   isGirl = true;
   myLine.style.top ="-214px";
   atqaMingyzu.style.display = "none";
   // shildehana.innerHTML = "Сүйінші хабарды жеткізгендер қыз туса – “көйлек тігер”, “қырық жеті” немесе “сауыншы туды” деп хабарлаған.";
   // qyrqynansh.innerHTML = "Кей адам қыздың қалың малы көп болсын деп қырқынан 40 күннен асырып шығарады";
   qyrqynansh.innerHTML = "for a girl, it's usually a bit more than 40 days.";

   // sundettoiTitle.innerHTML = "Syrğa toi";
   sundettoiTitle.innerHTML = "Syrga toi";
   sundettoiP.innerHTML = `As <span class="spanP">girl turns 4-5, her ear is pierced</span> and she is given her first golden or silver earrings. It's usually not a big celebration, but the most close family members gather together and celebrate the new life stage of their daughters.`;
}
}