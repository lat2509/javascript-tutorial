let addBtn = document.getElementById('addBtn');
let todotask = document.getElementById('todotask');
let tasklist = document.getElementById('tasklist');
let deleteBtn = document.getElementsByClassName('deleteBtn');
let notice = document.getElementById('notice');
let checkbox = document.querySelectorAll("input[type=checkbox]");

function getTask(){
    return JSON.parse(localStorage.getItem('tasks'))|| [];
}

function setTask(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addtask(){
    if(todotask.value!==''){
        notice.innerText = '';

        let tasks = getTask();
        tasks.push({text:todotask.value,completed:false});
        setTask(tasks);
        renderTask({text:todotask.value});
        todotask.value="";
    }
    else{
        notice.innerText = 'Điền việc phải làm';
        notice.style.color = 'red';
    }
}

function renderTask(tasks){
        const newtask = document.createElement('li');
        const text = document.createTextNode(tasks.text);
        const checkTask = document.createElement('input');
        checkTask.type= 'checkbox';
        checkTask.checked = tasks.completed;
        const newbtn = document.createElement('button');
        newbtn.textContent = 'xoá';
        newbtn.className = 'deleteBtn';
        newtask.appendChild(checkTask);
        newtask.appendChild(text);
        newtask.appendChild(newbtn);
        if (tasks.completed){
            newtask.style.textDecoration='line-through';
        }
        tasklist.appendChild(newtask);
}

function deleteTask(task,text){
    task = task.filter(t => t.text !== text);
    setTask(task);
}

function completedTast(task,text,e){
    task = task.map(t=>{
        if(t.text === text){
            t.completed = e.target.checked;
        }
        return t;
    });
    setTask(task);
}

addBtn.addEventListener('click',addtask);

tasklist.addEventListener('change', function (e) {
    if (e.target.type === 'checkbox') {
        let li = e.target.parentElement;
        let text = li.childNodes[1].textContent.trim();
        let tasks = getTask();
        tasks= tasks.map(t=>{
        if(t.text === text){
            t.completed = e.target.checked;
        }
        return t;
        });
        setTask(tasks);
        if (e.target.checked){
            li.style.textDecoration = 'line-through';
        }
        else{
            li.style.textDecoration = 'none';
        }
    }
});

tasklist.addEventListener('click',function(e){
    if (e.target.classList.contains('deleteBtn')) {
        let tasks = getTask();
        let li = e.target.parentElement;
        let text = li.childNodes[1].textContent.trim();
        deleteTask(tasks,text);
        e.target.parentElement.remove();
    }
});


window.onload = function(){
    let tasks= getTask();
    tasks.forEach(element => {
        renderTask(element);
    });
}