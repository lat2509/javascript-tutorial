let Start = document.getElementById('Start');
let Pause = document.getElementById('Pause');
let Resume = document.getElementById('Resume');
const content = document.getElementById("container");
const elem = document.getElementById("animate");   
const speedRange = document.getElementById('speedRange');
let id = null;
let pos = 0;
let maxPos =0;
let speed = parseInt(speedRange.value);
console.log(speed);
function frame() {
    if (pos >= maxPos) {
      clearInterval(id);
    } else {
      pos+=speed; 
      elem.style.left = pos + "px"; 
    }
  }


  function myMove() {
  clearInterval(id);
  pos=0;
  id = setInterval(frame, 10);
  maxPos = container.offsetWidth - elem.offsetWidth;
  
}

Start.addEventListener('click',myMove);

Pause.addEventListener('click',()=>{
    clearInterval(id);
})

Resume.addEventListener('click',()=>{
    id = setInterval(frame, 10);
    maxPos = container.offsetWidth - elem.offsetWidth;
    function frame() {
        if (pos >= maxPos) {
        clearInterval(id);
        } else {
        pos+=speed; 
        elem.style.left = pos + "px"; 
        }
    }
});


speedRange.addEventListener('input', (event) => {
  speed = parseInt(event.target.value);
  console.log(speed);
});
        