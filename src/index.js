document.addEventListener("DOMContentLoaded", () => {
  // your code here
 
 const taskForm = document.getElementById("task-form");
 const taskList = document.getElementById("task-list");
  
    taskForm.addEventListener("submit", function(event) {
      event.preventDefault();
      addTask();
    });
  
    taskList.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
      }
    });
  
    function addTask() {
      const taskName = document.getElementById("task-name").value;
      const priority = document.getElementById("priority").value;
      const user = document.getElementById("user").value;
      const duration = document.getElementById("duration").value;
      const dueDate = document.getElementById("due-date").value;
  
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <span class="task">${taskName}</span>
        <span class="priority ${priority}">${priority}</span>
        <span class="user">${user}</span>
        <span class="duration">${duration}</span>
        <span class="due-date">${dueDate}</span>
        <button class="delete">Delete</button>
      `;
      taskList.appendChild(taskItem);
  
      taskForm.reset();
    }
});
  
