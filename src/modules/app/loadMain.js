import { loadTasks } from "./loadTasks.js";

export function loadMain(projects, name) {
  const heading = document.getElementById("task-heading");
  heading.textContent = name;

  const filteredProjects = projects.find((project) => {
    return project.name === name;
  });

  console.log(filteredProjects);
  // loadTasks(projects);
}
