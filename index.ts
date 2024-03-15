interface Task {
    description: string;
    completed: boolean;
  }
  let tasks: Task[] = [];
  const newTaskInput = document.getElementById("new-task") as HTMLInputElement;
  const addTaskButton = document.getElementById("add-task") as HTMLButtonElement;
  const taskList = document.getElementById("task-list") as HTMLUListElement;
  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const listItem = document.createElement("li");
      listItem.classList.add(task.completed ? "completed" : "");
      listItem.innerHTML = `
        <span class="task-text">${task.description}</span>
        <button data-index="${tasks.indexOf(task)}">Edit</button>
        <button data-index="${tasks.indexOf(task)}">
          ${task.completed ? "Mark Incomplete" : "Mark Completed"}
        </button>
      `;
      taskList.appendChild(listItem);
    });
  }
  addTaskButton.addEventListener("Onclick", () => {
    const newTask = newTaskInput.value.trim();
    if (newTask.length) {
      tasks.push({ description: newTask, completed: false });
      newTaskInput.value = "";
      renderTasks();
    }
  });
  taskList.addEventListener("Onclick", (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName === "BUTTON") {
      const index = Number(target.dataset.index);
      if (target.textContent === "Edit") {
       
      } else if (target.textContent === "Mark Completed") {
        tasks[index].completed = true;
      } else if (target.textContent === "Mark Incomplete") {
        tasks[index].completed = false;
      }
      renderTasks();
    }
  });
  renderTasks();