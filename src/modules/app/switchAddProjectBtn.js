export function switchButton() {
    const projectContainer = document.querySelector("#project-container");
    const addProjectContainter = document.querySelector("#add-project-container");
    const invisibleElement = document.querySelector(".invisible");

    if (projectContainer === invisibleElement) {
        projectContainer.classList.remove("invisible");
        addProjectContainter.classList.add("invisible");
    } else {
        projectContainer.classList.add("invisible");
        addProjectContainter.classList.remove("invisible");
    }
}
