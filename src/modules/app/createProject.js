import Project from "../project";

export function createProject() {
  const projectTextEl = document.getElementById("project-text");
  const project = new Project(projectTextEl.value);

  projectTextEl.value = "";
  return project;
}
