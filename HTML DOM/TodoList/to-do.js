let addBtn = document.getElementById('addBtn');
let todotask = document.getElementById('todotask');
let tasklist = document.getElementById('tasklist');
let deleteBtn = document.getElementsByClassName('deleteBtn');
let changeBtn= document.getElementsByClassName('changeBtn');
let notice = document.getElementById('notice');


addBtn.addEventListener('click',addtask);


function addtask(){
    if(todotask.value!==''){
        notice.innerText = '';
        const newtask = document.createElement('li');
        newtask.textContent = todotask.value;
        tasklist.appendChild(newtask);
        const newbtn = document.createElement('button');
        newbtn.textContent = 'xoá';
        newbtn.className = 'deleteBtn';
        newtask.appendChild(newbtn);
        todotask.value="";
    }
    else{
        notice.innerText = 'Điền việc phải làm';
        notice.style.color = 'red';
    }
}

tasklist.addEventListener('click', function(e){
    if (e.target.classList.contains('deleteBtn')) {
        e.target.parentElement.remove();
    }
});
