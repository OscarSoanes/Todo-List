import Edit from "../../images/edit.svg";
import DeleteTask from "../../images/delete-task.svg";

import { empty } from "./clear.js";

export function loadTasks(project) {
  const tasksContainer = document.querySelector(".task-container");
  empty(tasksContainer);

  project.todos.forEach((todo) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-element");
    taskContainer.classList.add(todo.priority);

    const completed = document.createElement("input");
    completed.type = "checkbox";
    completed.classList.add("checkbox");
    completed.checked = todo.completed;

    const title = document.createElement("p");
    title.classList.add("task-title");
    title.textContent = todo.title;

    const date = document.createElement("p");
    date.textContent = todo.date;

    const editImg = document.createElement("img");
    editImg.src = Edit;
    editImg.alt = "Edit Task";

    const deleteTask = document.createElement("img");
    deleteTask.src = DeleteTask;
    deleteTask.alt = "Delete Task";

    const desc = document.createElement("p");
    desc.textContent = todo.desc;

    taskContainer.append(completed, title, date, editImg, deleteTask, desc);
    tasksContainer.appendChild(taskContainer);
  });
}
