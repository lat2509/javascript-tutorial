let items = document.querySelectorAll('.Item');
const list = document.getElementById("sortlisttable");
let draggedItem = null;
list.style.listStyle = 'none';
let saveBtn= document.getElementById("Save");

function dragstartHandler(e){
    draggedItem = e.target;
    setTimeout(() => draggedItem.style.display = 'none',0);
}

function dragoverHandler(e){
    e.preventDefault();
}

function dragendHandler(){
    if (draggedItem) draggedItem.style.display = "block";
    draggedItem = null;
}

function dropHandler(e){
    e.preventDefault();
    if (draggedItem !== e.target && e.target.classList.contains('Item')){
        list.insertBefore(draggedItem,e.target);
    }
    if (draggedItem){
        draggedItem.style.display = 'block';
        draggedItem = null;
    }
}

function loadList(){
    const saved = localStorage.getItem('sortedList');
    if (saved){
        const order = JSON.parse(saved);
        for(let text of order){
            const li = Array.from(document.querySelectorAll('.Item')).find(item => item.textContent===text);
            if (li) list.appendChild(li);
        } 
    }
}


for (let item of items){
    item.addEventListener('dragstart',dragstartHandler);
    item.addEventListener('dragend',dragendHandler);
}

list.addEventListener("dragover",dragoverHandler);
list.addEventListener("drop", dropHandler);


saveBtn.addEventListener("click", () => {
    items = document.querySelectorAll(".Item");
    const order = [];
    for (let item of items){
        order.push(item.textContent);
    }
    localStorage.setItem("sortedList", JSON.stringify(order));
    alert("Danh sách đã được lưu!");
});
    
window.addEventListener("DOMContentLoaded",loadList);

