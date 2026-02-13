let inputField = document.getElementById('inputField');
let addBtn = document.getElementById('addBtn');
let taskList = document.querySelector('.task-list');
let tasks = [];

function createTaskElement(taskText){
    const li = document.createElement('li');
    li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">X</button>`

    taskList.append(li);
    inputField.value = "";
}

addBtn.addEventListener("click", ()=>{
    const inputVal = inputField.value.trim();

    if(inputVal === ""){
        return;
    }

    createTaskElement(inputVal);
    tasks.push(inputVal);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
});

taskList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("delete-btn")){
        const taskText = e.target.previousElementSibling.textContent;

        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
        e.target.parentElement.remove();
    }
});

window.addEventListener("DOMContentLoaded", ()=>{
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if(storedTasks){
        tasks=storedTasks;
        tasks.forEach(task=>{
            createTaskElement(task);
        });
    }
});