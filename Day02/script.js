function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button onclick="removeTask(this)">🗑️</button>
    `;
  
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
  
    document.getElementById("task-list").appendChild(li);
    input.value = "";
  }
  
  function removeTask(btn) {
    btn.parentElement.remove();
  }
  
  // Theme toggle
  document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const toggle = document.getElementById("toggleTheme");
    toggle.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
  });
  