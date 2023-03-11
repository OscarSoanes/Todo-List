import Todo from "../todo";
import { emptyTodo } from "./refactorTodo.js";

export function saveTodo(projects) {
  const projectName = document.querySelector("#task-heading").textContent;

  const projectToUpdate = projects.find((project) => {
    return project.name === projectName;
  });

  const todoTitle = document.querySelector("#text").value;
  if (!projectToUpdate.validateTodo(todoTitle)) {
    return "Error";
  }

  const todoDate = document.querySelector("#date").value;
  const todoPriority = document.querySelector("#selected").value;
  const todoDesc = document.querySelector("#desc").value;

  const newTodo = new Todo(todoTitle, todoDesc, todoDate, todoPriority, false);
  projectToUpdate.newTodo(newTodo);

  emptyTodo();
}
