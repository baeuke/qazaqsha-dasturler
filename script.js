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
let isFullScreen = false;

let typed = new Typed(".auto-input", {
    strings: ["Ūlttyq Salt-Dästürler"],
    typeSpeed: 120,
    backSpeed: 0,
    loop: false
})

let typed2 = new Typed(".desc", {
    strings: [`Дүниеде өз тәжірибесін, білімін, жетістіктерін жаңа ұрпаққа жеткізіп отыратын өзіндік дәстүрі жоқ халық жоқ. Мәдениет пен рухани өмірдің барлық салаларын жаңғыртуда, өмірді бұдан да бай, әдемі, мағыналы ету жолындағы кейінгі ұрпақтардың ғасырлар бойы жасаған күш-жігерін жүзеге асыруда, жаңа мен ескінің сабақтастығын қамтамасыз етуде, қоғам мен жеке тұлғаның үйлесімді дамуында дәстүрлердің маңызы зор.

    Дәстүрлерді сіңіру адамдарда әлеуметтік қажетті қасиеттерді, әдет-ғұрыптарды және әлеуметтік белсенділік пен мінез-құлық дағдыларын қалыптастыруға ықпал етеді.
 `],
    typeSpeed: 20,
    backSpeed: 0,
    loop: false
})

let typed3 = new Typed(".desc2", {
   strings: [`
    Проект  Qazaqi Dästürler танымдық және тәрбиелік қызмет атқарады.`],
   typeSpeed: 20,
   backSpeed: 0,
   loop: false
});


// ********* FULL SCREEN ********* //


screenBtn.onclick = () => {
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
  genderBtn.onclick = ()=>{
   //  console.log(isGirl);
   if(isGirl){
    genderBtn.innerHTML = `<img src="/img/buttonUl.png" alt="">`;
    genderPicture.src = "/img/ul.png";
    isGirl = false;
    myLine.style.top ="-200px";
    atqaMingyzu.style.display="unset";
    shildehana.innerHTML = "Сүйінші хабарды жеткізгендер ұл туса – “ат ұстар” немесе “жылқышы” деп хабарлаған.";
    qyrqynansh.innerHTML = "Әдетте, ұл баланы 37- 39 күнде қырқынан шығарады";
    sundettoiTitle.innerHTML = "Sündet toi";
    sundettoiP.innerHTML = `Қазақта шілдеханадан соң ең атаулы той – сүндет тойы. Ес тоқтатата бастаған баланың өз өміріндегі ағайын-туыс ортасында өзіне деген ықыласты сезініп, құттықтаулар мен бата-тілекті қабылдайтын алғашқы тойы. 
    </br>
       Сүндетке отырған баланың да мінез-құлқы бірден өзгереді. Шапқылап ойнап жүретін баланың мінезі салмақтанып, жүріс-тұрысы жинақталып, байсалды қалыпқа түседі. Айналасына да басқаша қарай бастайды.`;
       
       console.log("1")
   att.classList.add("hidden");
   console.log("2")

   }
   else{
    genderBtn.innerHTML = `<img src="/img/buttonQyz.png" alt="">`;
    genderPicture.src = "/img/qyz.png";
    isGirl = true;
    myLine.style.top ="-200px";
    atqaMingyzu.style.display="none";
    shildehana.innerHTML = "Сүйінші хабарды жеткізгендер қыз туса – “көйлек тігер”, “қырық жеті” немесе “сауыншы туды” деп хабарлаған.";
    qyrqynansh.innerHTML = "Кей адам қыздың қалың малы көп болсын деп қырқынан 40 күннен асырып шығарады";
   
    sundettoiTitle.innerHTML = "Syrğa toi";
    sundettoiP.innerHTML = `Кішкене қыз бала есейіп, құлағын тесіп, сырға салғанда жасалатын той. Халқымыз "Қызымыз сырғалы, қыз санатты болсын" деп құлағын тестіріп сырға салатын болған. Қыздың басына үкілі тақия кигізеді. Осыдан бастап қыздар өзін басқаша сезінген. "Қызға қырық үйден тыю" деген ұғым бар. Ол осы "сырға тағу" рәсімінен кейін басталады`;
  }
  }