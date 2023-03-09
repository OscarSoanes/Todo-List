import './style.css';
import './reset.css';
import {switchButton} from './modules/app/switchAddProjectBtn.js';

import Project from './modules/project.js';
import Todo from './modules/todo.js';

let projects = [];

const addProjectEl = document.querySelector("#project-container");
addProjectEl.addEventListener(("click"), () => switchButton())

const projectSaveEl = document.getElementById("project-save")
projectSaveEl.addEventListener(("click"), () => {})

const projectCancelEl = document.getElementById("project-cancel");
projectCancelEl.addEventListener("click", () => {
    console.log("test");
    switchButton()
});