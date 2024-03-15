var tasks = [];
var newTaskInput = document.getElementById("new-task");
var addTaskButton = document.getElementById("add-task");
var taskList = document.getElementById("task-list");
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function (task) {
        var listItem = document.createElement("li");
        listItem.classList.add(task.completed ? "completed" : "");
        listItem.innerHTML = "\n        <span class=\"task-text\">".concat(task.description, "</span>\n        <button data-index=\"").concat(tasks.indexOf(task), "\">Edit</button>\n        <button data-index=\"").concat(tasks.indexOf(task), "\">\n          ").concat(task.completed ? "Mark Incomplete" : "Mark Completed", "\n        </button>\n      ");
        taskList.appendChild(listItem);
    });
}
addTaskButton.addEventListener("click", function () {
    var newTask = newTaskInput.value.trim();
    if (newTask.length) {
        tasks.push({ description: newTask, completed: false });
        newTaskInput.value = "";
        renderTasks();
    }
});
taskList.addEventListener("click", function (event) {
    var target = event.target;
    if (target.tagName === "BUTTON") {
        var index = Number(target.dataset.index);
        if (target.textContent === "Edit") {
        }
        else if (target.textContent === "Mark Completed") {
            tasks[index].completed = true;
        }
        else if (target.textContent === "Mark Incomplete") {
            tasks[index].completed = false;
        }
        renderTasks();
    }
});
renderTasks();
