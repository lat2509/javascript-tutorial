let hello = document.querySelector('p');
let changeText = document.getElementById('change-text');
let changeColor = document.getElementById('change-color');
let greenDiv = document.querySelector('.green-div');
let showBtn = document.getElementById('show-button');
let hideBtn = document.getElementById('hide-button');
let img = document.querySelector('img');


changeText.addEventListener('click',function(){
    hello.innerText = 'Hello Dom';
});


changeColor.addEventListener('click',function(){
    greenDiv.style.backgroundColor = 'red';
});

showBtn.addEventListener('click',function(){
    img.style.display = 'block';
})

hideBtn.addEventListener('click',function(){
    img.style.display = 'none';
})