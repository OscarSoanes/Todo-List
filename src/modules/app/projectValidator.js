export function validateProject(projectToAdd, projectList) {
  let result = true;

  const bannedProjectNames = ["inbox", "today", "this week"];
  projectList.forEach((project) => {
    if (
      project.name.toLowercase === projectToAdd.name.toLowercase &&
      !bannedProjectNames.includes(projectToAdd.toLowercase)
    ) {
      result = false;
    }
  });

  return result;
}
