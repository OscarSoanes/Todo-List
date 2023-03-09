import './style.css';
import './reset.css';
import {switchButton} from './modules/app/switchAddProjectBtn.js';
import {createProject} from './modules/app/createProject.js';
import { validateProject } from './modules/app/projectValidator';
import { updateSidebar } from './modules/app/updateProjectsSideBar';

let projects = [];

const addProjectEl = document.querySelector("#project-container");
addProjectEl.addEventListener(("click"), () => switchButton())

const projectSaveEl = document.getElementById("project-save")
projectSaveEl.addEventListener(("click"), () => {
    const newProject = createProject();
    if (validateProject(newProject, projects)) {
        projects.push(newProject);
        switchButton();
        updateSidebar(projects);
    } else {
        alert("Projects must have unique names!");
    }
})

const projectCancelEl = document.getElementById("project-cancel");
projectCancelEl.addEventListener("click", () => {switchButton()});