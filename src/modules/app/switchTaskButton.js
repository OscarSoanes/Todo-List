export function switchAddTask() {
  const addTaskButton = document.querySelector("#add-task-button");
  const addTaskContainer = document.querySelector("#add-task-container");
  const invisibleElement = document.querySelectorAll(".invisible-task");

  console.log(addTaskButton);
  console.log(addTaskContainer);

  if (addTaskButton === invisibleElement) {
    addTaskButton.classList.remove("invisible-task");
    addTaskContainer.classList.add("invisible-task");
  } else {
    addTaskButton.classList.add("invisible-task");
    addTaskContainer.classList.remove("invisible-task");
  }
}
