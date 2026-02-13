let inputField = document.getElementById('inputField');
let addBtn = document.getElementById('addBtn');
let taskList = document.querySelector('.task-list');
let tasks = [];

function createTaskElement(task){
    const li = document.createElement('li');

    if(task.completed){
        li.classList.add("completed");
    }

    li.innerHTML = `
    <span class="task-text">${task.text}</span>
    <button class="delete-btn">X</button>`;

    li.setAttribute("data-id", task.id);

    taskList.append(li);
}

addBtn.addEventListener("click", ()=>{
    const inputVal = inputField.value.trim();

    if(inputVal === ""){
        return;
    }

    const taskObj = {
        id: Date.now(),
        text: inputVal,
        completed: false
    };
    createTaskElement(taskObj);
    tasks.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    inputField.value = "";
});

inputField.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        addBtn.click();
    }
})

taskList.addEventListener("click", (e)=>{

    const li = e.target.parentElement;
    const taskId = Number(li.getAttribute("data-id"));

    //DELETE
    if(e.target.classList.contains("delete-btn")){
        tasks = tasks.filter(task => task.id !== taskId);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        li.remove();
    }

    //TOGGLE
    if(e.target.classList.contains("task-text")){
        tasks = tasks.map(task =>{
            if(task.id === taskId){
                task.completed = !task.completed;
            }
            return task;
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        li.classList.toggle("completed");
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