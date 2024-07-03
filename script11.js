
function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("task-list");

    
        var taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function() {
            taskItem.remove();
        };

        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

document.getElementById("task-list").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    }
});
