
const screenBtn = document.getElementById('screenButton');
let isFullScreen = false;

let typed = new Typed(".auto-input", {
    strings: ["Ūlttyq Salt-Dästürler"],
    typeSpeed: 120,
    backSpeed: 0,
    loop: false
})

let typed2 = new Typed(".desc", {
    strings: ["It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."],
    typeSpeed: 20,
    backSpeed: 0,
    loop: false
})


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