export function validateProject(projectToAdd, projectList) {
    let result = true;

    projectList.forEach(project => {
        if (project.name === projectToAdd.name) {
            result = false;
        }
    });

    return result;
}