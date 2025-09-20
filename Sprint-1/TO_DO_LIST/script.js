function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement("li");

    li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="removeTask(this)">Delete</button>
  `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}

function toggleComplete(span) {
  span.parentElement.classList.toggle("completed");
}