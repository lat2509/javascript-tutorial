let addBtn = document.getElementById('addBtn');
let todotask = document.getElementById('todotask');
let tasklist = document.getElementById('tasklist');
let deleteBtn = document.getElementsByClassName('deleteBtn');
let changeBtn= document.getElementsByClassName('changeBtn');

addBtn.addEventListener('click',addtask);


function addtask(){
    const newtask = document.createElement('li');
    newtask.textContent = todotask.value;
    tasklist.appendChild(newtask);
    const newbtn = document.createElement('button');
    newbtn.textContent = 'xoá';
    newbtn.className = 'deleteBtn';
    const newcbtn = document.createElement('button');
    newcbtn.textContent='sửa';
    newcbtn.className='changeBtn';
    newtask.appendChild(newcbtn);
    newtask.appendChild(newbtn);
    todotask.value="";
}

tasklist.addEventListener('click', function(e){
    if (e.target.classList.contains('deleteBtn')) {
        e.target.parentElement.remove();
    }
});





