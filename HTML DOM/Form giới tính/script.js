let userName = document.getElementById('name');
let boy = document.getElementById('boy');
let girl = document.getElementById('girl');
let submitBtn = document.getElementById('submitBtn');
let gender= document.querySelector("input[name='gender']:checked");

let notice = document.getElementById('notice');

submitBtn.addEventListener('click',function(){
    if (boy.checked){
        alert (`Xin chào ${userName.value}, giới tính:${boy.value}`);
    }else if (girl.checked){
        alert (`Xin chào ${userName.value}, giới tính:${girl.value}`);

    }
    else{
        notice.innerText = 'Vui lòng chọn giới tính';
        notice.style.color = 'red';
    }
})