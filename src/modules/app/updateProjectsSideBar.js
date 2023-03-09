import { empty } from "./clear";
import CheckList from "../../images/checklist.svg";
import Delete from "../../images/delete.svg";

export function updateSidebar(projectsList) {
    const projectsContainer = document.querySelector("#projects");
    empty(projectsContainer);

    projectsList.forEach(project => {
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("menu-option");

        const checkIcon = document.createElement("img");
        checkIcon.src = CheckList;
        checkIcon.alt = "Project";

        const nameEl = document.createElement("p");
        nameEl.textContent = project.name;

        const deleteIcon = document.createElement("img");
        deleteIcon.src = Delete;
        deleteIcon.alt = "Delete Project";
        deleteIcon.classList.add("close-project");

        projectContainer.append(checkIcon, nameEl, deleteIcon)
        projectsContainer.appendChild(projectContainer);
    });
}