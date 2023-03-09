export function setAsSelected(newSelected) {
    let previousSelected = document.querySelector(".selected");
    previousSelected.classList.remove("selected");
    newSelected.classList.add("selected");
}