const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const progressBar = document.getElementById("blackLine");
const titlePlayer = document.getElementById("titlePlayer");
const close = document.getElementById("close");
const backBtn = document.getElementById("back");
const forwardBtn = document.getElementById("forward");
const radioBtn = document.getElementById('radio-app');

const contentArray = [
    {nameMusic: "Take me", musicSource: `<source src="/img/jansyry.wav" type="audio/mpeg">`, duration:96},
    {nameMusic: "Take me to church", musicSource: `<source src="/img/jansyry.wav" type="audio/mpeg">`, duration:96}
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



let mouseUp = false;
let mouseMove = false;
let mouseDown = false;
let rectV  = null;
let xV = null;

function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(player);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    player.style.left = `${leftVal + movementX}px`;
    player.style.top = `${topVal + movementY}px`;
  }

player.onmousedown = ()=>{
    mouseDown = true;
 
    player.addEventListener("mousemove", onDrag);
};


player.onmouseup = ()=>{
    mouseDown = false;
  
    player.removeEventListener("mousemove", onDrag);
}

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
  function updatePlayer(index){  
    myAudio.innerHTML = contentArray[index].musicSource;
    duration = contentArray[index].duration;
    widthPercent = 200/duration;
    titlePlayer.innerHTML =contentArray[index].nameMusic;
   
    myAudio.load();
    playButton.click();
  }