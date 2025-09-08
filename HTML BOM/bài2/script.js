    const  redBtn = document.getElementById('red');
    const greenBtn = document.getElementById('green');
    const yellowBtn = document.getElementById('yellow');
    const content = document.querySelector('.container');

    function changeColor(color){
        content.classList.remove('green-bg','yellow-bg','red-bg');
        content.classList.add(color+'-bg');
    }

    function pushColor(color){
        changeColor(color);
        if (!history.state || history.state.color !== color){
            history.pushState({color},'','/'+color);
        }
        
    }

    window.addEventListener('popstate',function(){
        if(history.state && history.state.color){
            changeColor(history.state.color);
        }
        else
        {
            pushColor('white'); 
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
    if (!history.state) {
        history.replaceState({ color: 'white' }, '', '/bài2/index.html');
    }
    changeColor(history.state.color);
    });

    redBtn.addEventListener('click',()=>pushColor("red"));

    greenBtn.addEventListener('click',()=>pushColor('green'));

    yellowBtn.addEventListener('click',()=>pushColor('yellow'));