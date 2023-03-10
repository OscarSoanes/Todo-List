export function updateCompleted(index, projects, value) {
  const currentProject = document.querySelector("#task-heading");
  const filteredProjects = projects.find((project) => {
    return project.name === currentProject.textContent;
  });
  filteredProjects.switchCompleted(index, value);
}
