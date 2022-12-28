const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const progressBar = document.getElementById("blackLine");
const titlePlayer = document.getElementById("titlePlayer");
const close = document.getElementById("close");
const backBtn = document.getElementById("back");
const forwardBtn = document.getElementById("forward");
const radioBtn = document.getElementById('radio-app');

const contentArray = [
    {nameMusic: "Jan syry", musicSource: `<source src="/mus/zhansyry.mp3" type="audio/mpeg">`, duration:65},
    {nameMusic: "Aq bosaga", musicSource: `<source src="/mus/akbosaga.mp3" type="audio/mpeg"> type="audio/mpeg">`, duration:55},
    {nameMusic: "Shudyn boiynda", musicSource: `<source src="/mus/shu.mp3" type="audio/mpeg"> type="audio/mpeg">`, duration:60},
    {nameMusic: "Toi jyry", musicSource: `<source src="/mus/toizhyry.mp3" type="audio/mpeg"> type="audio/mpeg">`, duration:51},
    {nameMusic: "Belgisiz Zhan", musicSource: `<source src="/mus/orda1.mp3" type="audio/mpeg"> type="audio/mpeg">`, duration:72},
    {nameMusic: "Tagdyr", musicSource: `<source src="/mus/orda2.mp3" type="audio/mpeg"> type="audio/mpeg">`, duration:80}
];

let index = 0;
let duration = contentArray[0].duration;

const player = document.getElementById("player");
let animateProgress = null;
const myAudio = document.getElementById("myAudio");

let width = 0;
let widthPercent = 250/duration;
function animation(){
    if(width>250){
        width = 0;
        progressBar.style.width = 0+"px";
        pauseButton.click();
    }
    width += widthPercent;
    progressBar.style.width = width+"px";
    
};
playButton.onclick=()=>{
    // console.log("in play button")
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
    myAudio.play(); 
    
    animateProgress = setInterval(animation, 1000);
};
pauseButton.onclick=()=>{
    clearInterval(animateProgress); 
    pauseButton.classList.add("hide");
    playButton.classList.remove("hide");
    myAudio.pause(); 
  
};


radioBtn.onclick = () => {
  player.style.display = "unset";
}



// let mouseUp = false;
// let mouseMove = false;
// let mouseDown = false;
// let rectV  = null;
// let xV = null;

// function onDrag({movementX, movementY}){
//     let getStyle = window.getComputedStyle(player);
//     let leftVal = parseInt(getStyle.left);
//     let topVal = parseInt(getStyle.top);
//     player.style.left = `${leftVal + movementX}px`;
//     player.style.top = `${topVal + movementY}px`;
//   }

// player.onmousedown = ()=>{
//     mouseDown = true;
//     player.addEventListener("mousemove", onDrag);
// };


// player.onmouseup = ()=>{
//     mouseDown = false;

//     player.removeEventListener("mousemove", onDrag);
// }

close.onclick = ()=>{
    player.style.display = "none";
}



forwardBtn.addEventListener("click", ()=> {

    index !== contentArray.length-1 ?  index++ :  index =0;
    updateProgressLine();
    updatePlayer(index);
  }
  );
  backBtn.addEventListener("click", ()=> {

    index !== 0 ?  index-- :  index = contentArray.length-1;
    updateProgressLine();
    updatePlayer(index);
  }
  );


  function updateProgressLine(){
    pauseButton.click();
    width = 0;
    progressBar.style.width = 0+'px';
  }
  async function updatePlayer(index){  
    myAudio.innerHTML = contentArray[index].musicSource;
    duration = contentArray[index].duration;
    widthPercent = 200/duration;
    titlePlayer.innerHTML =contentArray[index].nameMusic;
    // console.log(myAudio)
    try {
      await myAudio.load();
      
    } catch (err) {
      console.log("errorrrr:" + err);
    }
    playButton.click();
  }


  // draggable div from w3schools (eliminates dragging bug):

  dragElement(player);

  function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (player) {
    // if present, the header is where you move the DIV from:
    player.onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}