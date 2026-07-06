const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">❌</button>
    `;

    li.querySelector("span").addEventListener("click", () => {
        li.classList.toggle("completed");
        saveTasks();
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
        saveTasks();
    });

    taskList.appendChild(li);

    taskInput.value = "";

    saveTasks();
}

// Button Click
addBtn.addEventListener("click", addTask);

// Enter Key
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Save Tasks
function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

// Load Tasks
function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks") || "";

    document.querySelectorAll("#taskList li").forEach(li => {

        li.querySelector("span").addEventListener("click", () => {
            li.classList.toggle("completed");
            saveTasks();
        });

        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.remove();
            saveTasks();
        });

    });
}

loadTasks();
