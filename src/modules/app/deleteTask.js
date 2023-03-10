export function deleteTask(projects, index) {
  const projectName = document.querySelector("#task-heading");

  const project = projects.find((project) => {
    return project.name === projectName.textContent;
  });

  console.log(index);
  project.removeTodo(index);
  console.log(project);
}
