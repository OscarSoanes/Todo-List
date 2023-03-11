import "./style.css";
import "./reset.css";
import { switchButton } from "./modules/app/switchAddProjectBtn.js";
import { createProject } from "./modules/app/createProject.js";
import { validateProject } from "./modules/app/projectValidator.js";
import { updateSidebar } from "./modules/app/updateProjectsSideBar.js";
import { setAsSelected } from "./modules/app/setAsSelected.js";
import { switchAddTask } from "./modules/app/switchTaskButton.js";
import { loadMain, getMain } from "./modules/app/loadMain.js";
import { saveTodo } from "./modules/app/saveTodo.js";
import { resetAndEmptyTodo } from "./modules/app/refactorTodo.js";
import {
  hideAddTaskButton,
  showAddTaskButton,
} from "./modules/app/updateAddTaskButton";
import { deleteTask } from "./modules/app/deleteTask";
import { setAsForm } from "./modules/app/switchTaskEditorMode";
import { updateTodo } from "./modules/app/editTask";
import { updateCompleted } from "./modules/app/updateCompleted";
import { saveData } from "./modules/app/saveToLocalAPI";
import { loadProjects } from "./modules/app/loadProjects";
import { deleteProject } from "./modules/app/deleteProject";

let projects = loadProjects();
updateSidebar(projects);
getMain(projects);
// Switches the add project button
const addProjectEl = document.querySelector("#project-container");
addProjectEl.addEventListener("click", () => switchButton());

// Saves new project
const projectSaveEl = document.getElementById("project-save");
projectSaveEl.addEventListener("click", () => {
  const newProject = createProject();
  if (validateProject(newProject, projects)) {
    projects.push(newProject);
    switchButton();
    updateSidebar(projects);
    saveData(projects);
  } else {
    alert("Projects must have unique names!");
  }
});

// Cancel button for project
const projectCancelEl = document.getElementById("project-cancel");
projectCancelEl.addEventListener("click", () => {
  switchButton();
});

// Looks at everything on the Aside element, includes the Projects menu
let asideEl = document.querySelector("aside");
asideEl.addEventListener("click", (e) => {
  if (e.target.className === "close-project") {
    setAsSelected(asideEl.firstElementChild);
    deleteProject(e.target.previousElementSibling.textContent, projects);
    getMain(projects);
    updateSidebar(projects);
    saveData(projects);
    return;
  }

  const element = e.target.closest(".menu-option");
  if (element !== null) {
    setAsSelected(element);
    resetAndEmptyTodo();
    if (element.childNodes.length === 5) {
      hideAddTaskButton();
      getMain(projects);
    } else {
      loadMain(projects, element.childNodes[1].textContent);
      showAddTaskButton();
    }
  }
});

// Switches the Add Task menu from button to form
const addTaskEl = document.querySelector("#add-task-button");
addTaskEl.addEventListener("click", () => {
  const name = document.querySelector("#task-heading");
  loadMain(projects, name.textContent);
  switchAddTask();
});

// Cancel returns back to the Add menu Button
const taskCancelEl = document.querySelector("#cancel");
taskCancelEl.addEventListener("click", (e) => {
  e.preventDefault();
  switchAddTask();
});

// Saves the current task
const saveTaskEl = document.querySelector("#save");
saveTaskEl.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.querySelector("#add-task-container");
  form.checkValidity();
  if (!form.reportValidity()) {
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
  saveData(projects);
});

// Deals with the entirety of the tasks in task container
const tasksContainer = document.querySelector(".task-container");
tasksContainer.addEventListener("click", (e) => {
  // Editing a task
  if (e.target.alt === "Edit Task") {
    const openedForms = document.querySelector(".edit-task-container");
    if (openedForms !== null) {
      alert("Please close the current edit form before opening another!");
      return;
    }

    resetAndEmptyTodo();

    setAsForm(
      projects,
      e.target.parentElement.getAttribute("index"),
      e.target.closest(".task-element")
    );
  } else if (e.target.alt === "Delete Task") {
    const projectName = document.querySelector("#task-heading").textContent;
    deleteTask(projects, e.target.parentElement.getAttribute("index"));
    loadMain(projects, projectName);
    saveData(projects);
  }

  if (e.target.className === "edit-cancel") {
    e.preventDefault();
    const name = document.querySelector("#task-heading");
    loadMain(projects, name.textContent);
  }

  if (e.target.className === "edit-save") {
    e.preventDefault();
    const form = document.querySelector(".edit-task-container");
    form.checkValidity();
    if (!form.reportValidity()) {
      return;
    }
    const msg = updateTodo(
      e.target.closest(".task-element").getAttribute("index"),
      projects
    );

    if (msg === "Error") {
      alert("Todos must not have the same name!");
      return;
    }
    const projectName = document.querySelector("#task-heading").textContent;
    loadMain(projects, projectName);
    saveData(projects);
  }

  if (e.target.className === "checkbox") {
    updateCompleted(
      e.target.parentElement.getAttribute("index"),
      projects,
      e.target.checked
    );
    saveData(projects);
  }
});
