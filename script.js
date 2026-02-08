let inputField = document.getElementById('inputField');
let addBtn = document.getElementById('addBtn');
let taskList = document.querySelector('.task-list');

addBtn.addEventListener("click", ()=>{
    const inputVal = inputField.value;

    if(inputVal === ""){
        return;
    }

    const li = document.createElement('li');
    li.textContent = inputVal;

    taskList.append(li);
    inputField.value = "";
});