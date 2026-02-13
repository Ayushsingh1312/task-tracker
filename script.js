let inputField = document.getElementById('inputField');
let addBtn = document.getElementById('addBtn');
let taskList = document.querySelector('.task-list');

addBtn.addEventListener("click", ()=>{
    const inputVal = inputField.value.trim();

    if(inputVal === ""){
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
    <span>${inputVal}</span>
    <button class="delete-btn">X</button>`

    taskList.append(li);
    inputField.value = "";
});

taskList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("delete-btn")){
        e.target.parentElement.remove();
    }
});