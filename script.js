// Declare Reference Varialbes
const addbtn = document.querySelector("#add-btn"); // Get the add-btn ID
const newTaskInput = document.querySelector("#wrapper input"); //  Get the wrapper ID and input tag
const taskContainer = document.querySelector("#tasks"); //  Get the tasks ID
const error = document.querySelector("#error"); //  Get the error ID
const countValue = document.querySelector("#count-value"); //  Get the count-value ID
let taskCount = 0;


// Display pending task count
const displayCount = (taskCount) =>{
    countValue.innerHTML = taskCount;
};


// Add a new task
const addTask = () =>{
    const taskName = newTaskInput.value.trim();
    error.style.display = "none";
    if(!taskName){
        setTimeout(() =>{
            error.style.display = "block";
        }, 200);
        return;
    
    
    };
    
    const task = `<div id="task">
    <input type="checkbox" id="task-check">
    <span id="taskname">${taskName}</span>
    <button id="edit">
        <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button id="delete">
        <i class="fa-solid fa-trash"></i>
    </button>
</div>`;
    
    taskContainer.insertAdjacentHTML("beforeend", task);


// Deleting a task
const deleteButtons = document.querySelectorAll("#delete")
deleteButtons.forEach(button =>{
    button.onclick = () => {
        button.parentNode.remove();
        taskCount -= 1;
        displayCount(taskCount);
    };
});



// Editing a task
const editButtons = document.querySelectorAll("#edit")
editButtons.forEach((editBtn) => {
    editBtn.onclick = (e) => {
        let targetElement = e.target;
        if(!(e.target.id == "edit")) {
            targetElement = e.target.parentElement;
        }
        newTaskInput.value = targetElement.previousElementSibling?.innerText;
        targetElement.parentNode.remove();
        taskCount -= 1;
        displayCount(taskCount)
    };
});



// Crossing out a completed task
const taskCheck = document.querySelectorAll("#task-check")
taskCheck.forEach((checkBox) => {
    checkBox.onchange = () => {
        checkBox.nextElementSibling.classList.toggle("completed");
        if(checkBox.checked) {
            taskCount -= 1;
        }else{
            taskCount += 1;
        }
        displayCount(taskCount);
    };
});
taskCount += 1;
displayCount(taskCount);
newTaskInput.value = "";
};



addbtn.addEventListener("click", addTask)

// Function on window load
window.onload = () => {
    taskCount = 0;
    displayCount(taskCount);
    newTaskInput.value = "";
}

