export function deleteProject(target, projects) {
  const index = projects.findIndex((project) => project.name === target);
  projects.splice(index, 1);
}
