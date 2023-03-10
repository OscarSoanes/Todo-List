import { loadTasks } from "./loadTasks.js";
import { empty } from "./clear.js";

export function loadMain(projects, name) {
  const heading = document.getElementById("task-heading");
  heading.textContent = name;

  const filteredProjects = projects.find((project) => {
    return project.name === name;
  });

  loadTasks(filteredProjects);
}

export function getMain(projects) {
  const tasksContainer = document.querySelector(".task-container");
  empty(tasksContainer);

  const name = document.querySelector("#task-heading");
  name.textContent = "Inbox";

  projects.forEach((project) => {
    project.todos.forEach((todo) => {
      const taskContainer = document.createElement("div");
      taskContainer.classList.add("task-element");
      taskContainer.classList.add(todo.priority);

      const completed = document.createElement("input");
      completed.type = "checkbox";
      completed.classList.add("checkbox");
      completed.checked = todo.completed;
      completed.disabled = true;

      const title = document.createElement("p");
      title.classList.add("task-title");
      title.textContent = todo.title;

      const date = document.createElement("p");
      date.textContent = todo.date;
      date.classList.add("span-3");

      const desc = document.createElement("p");
      desc.textContent = todo.desc;

      taskContainer.append(completed, title, date, desc);
      tasksContainer.appendChild(taskContainer);
    });
  });
}
