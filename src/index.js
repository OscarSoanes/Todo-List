import "./style.css";
import "./reset.css";
import { switchButton } from "./modules/app/switchAddProjectBtn.js";
import { createProject } from "./modules/app/createProject.js";
import { validateProject } from "./modules/app/projectValidator.js";
import { updateSidebar } from "./modules/app/updateProjectsSideBar.js";
import { setAsSelected } from "./modules/app/setAsSelected.js";
import { switchAddTask } from "./modules/app/switchTaskButton.js";
import { loadMain } from "./modules/app/loadMain.js";
import { saveTodo } from "./modules/app/saveTodo.js";
import { resetAndEmptyTodo } from "./modules/app/refactorTodo.js";

let projects = [];

const addProjectEl = document.querySelector("#project-container");
addProjectEl.addEventListener("click", () => switchButton());

const projectSaveEl = document.getElementById("project-save");
projectSaveEl.addEventListener("click", () => {
  const newProject = createProject();
  if (validateProject(newProject, projects)) {
    projects.push(newProject);
    switchButton();
    updateSidebar(projects);
  } else {
    alert("Projects must have unique names!");
  }
});

const projectCancelEl = document.getElementById("project-cancel");
projectCancelEl.addEventListener("click", () => {
  switchButton();
});

// Looks at everything on the Aside element, includes the Projects menu
let asideEl = document.querySelector("aside");
asideEl.addEventListener("click", (e) => {
  const element = e.target.closest(".menu-option");
  if (element !== null) {
    setAsSelected(element);
    resetAndEmptyTodo();
    if (element.childNodes.length === 5) {
      loadMain(projects, element.childNodes[3].textContent);
    } else {
      loadMain(projects, element.childNodes[1].textContent);
    }
  }
});

const addTaskEl = document.querySelector("#add-task-button");
addTaskEl.addEventListener("click", () => {
  switchAddTask();
});

const taskCancelEl = document.querySelector("#cancel");
taskCancelEl.addEventListener("click", (e) => {
  e.preventDefault();
  switchAddTask();
});

const saveTaskEl = document.querySelector("#save");
saveTaskEl.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.querySelector("#add-task-container");
  form.checkValidity();
  if (form.reportValidity()) {
    return;
  }

  let message = saveTodo(projects);
  if (message === "Error") {
    alert("Todos must not have the same name!");
    return;
  }
  switchAddTask();
  const name = document.querySelector("#task-heading");
  loadMain(projects, name.textContent);
});
