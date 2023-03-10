export function validateProject(projectToAdd, projectList) {
  let result = true;

  const bannedProjectNames = ["inbox", "today", "this week"];
  if (bannedProjectNames.includes(projectToAdd.name)) {
    return false;
  }

  projectList.forEach((project) => {
    if (project.name === projectToAdd.name) {
      result = false;
    }
  });

  return result;
}
