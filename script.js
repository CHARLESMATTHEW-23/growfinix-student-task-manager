// 1. Get HTML Elements
const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskDeadline = document.getElementById("taskDeadline");
const taskList = document.getElementById("taskList");
const searchTask = document.getElementById("searchTask");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");
// 2. Load Tasks from Local Storage
let tasks = [];
try {
    tasks = JSON.parse(localStorage.getItem("studentTasks")) || [];
} catch (error) {
    tasks = [];
}
// 3. Save Tasks to Local Storage
function saveTasks() {
    localStorage.setItem("studentTasks", JSON.stringify(tasks));
}
// 4. Update Dashboard Statistics
function updateDashboard() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    totalTasks.textContent = total;
    completedTasks.textContent = completed;
    pendingTasks.textContent = pending;
}
// 5. Display Tasks
function displayTasks(filteredTasks = tasks) {
    taskList.innerHTML = "";
    if (filteredTasks.length === 0) {
        const emptyMessage = document.createElement("div");
        emptyMessage.className = "col-12 text-center text-muted py-4";
        emptyMessage.textContent = tasks.length === 0
            ? "No tasks available. Add your first task!"
            : "No matching tasks found.";
        taskList.appendChild(emptyMessage);
        return;
    }
    filteredTasks.forEach(function(task) {
        const column = document.createElement("div");
        column.className = "col-md-6 col-lg-4";
        const card = document.createElement("div");
        card.className = "card task-card shadow-sm";
        if (task.completed) card.classList.add("completed");
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        const title = document.createElement("h5");
        title.textContent = task.title;
        const description = document.createElement("p");
        description.textContent = task.description || "No description provided.";
        const deadline = document.createElement("p");
        deadline.className = "small";
        deadline.textContent = "Deadline: " + task.deadline;
        const status = document.createElement("span");
        status.className = task.completed
            ? "badge bg-success mb-3"
            : "badge bg-warning text-dark mb-3";
        status.textContent = task.completed ? "Completed" : "Pending";
        // Complete Button
        const completeButton = document.createElement("button");
        completeButton.className = "btn btn-sm btn-success me-2";
        completeButton.innerHTML = '<i class="bi bi-check-circle"></i> ' +
            (task.completed ? "Undo" : "Complete");
        completeButton.addEventListener("click", function() {
            toggleTask(task.id);
        });
        // Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-sm btn-danger";
        deleteButton.innerHTML = '<i class="bi bi-trash"></i> Delete';
        deleteButton.addEventListener("click", function() {
            deleteTask(task.id);
        });
        // Add Elements to Task Card
        cardBody.append(title, description, deadline, status);
        cardBody.append(document.createElement("br"));
        cardBody.append(completeButton, deleteButton);
        card.appendChild(cardBody);
        column.appendChild(card);
        taskList.appendChild(column);
    });
}
// 6. Add New Task
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();
    const deadline = taskDeadline.value;
    if (title === "" || deadline === "") {
        alert("Please enter the task title and deadline.");
        return;
    }
    const newTask = {
        id: Date.now(),
        title: title,
        description: description,
        deadline: deadline,
        completed: false
    };
    tasks.push(newTask);
    saveTasks();
    displayTasks();
    updateDashboard();
    taskForm.reset();
});
// 7. Toggle Task Completion
function toggleTask(id) {
    tasks = tasks.map(function(task) {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveTasks();
    displayTasks();
    updateDashboard();
}
// 8. Delete Task
function deleteTask(id) {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;
    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });
    saveTasks();
    displayTasks();
    updateDashboard();
}
// 9. Search Tasks
searchTask.addEventListener("input", function() {
    const searchValue = searchTask.value.toLowerCase().trim();
    const filteredTasks = tasks.filter(function(task) {
        return task.title.toLowerCase().includes(searchValue) ||
            task.description.toLowerCase().includes(searchValue);
    });
    displayTasks(filteredTasks);
});
// 10. Initial Display
displayTasks();
updateDashboard();