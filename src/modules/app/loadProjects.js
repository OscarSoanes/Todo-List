import Project from "../project";
import Todo from "../todo";

export function loadProjects() {
  const data = JSON.parse(localStorage.getItem("projects"));

  let projects = [];
  data.forEach((project) => {
    const newProject = new Project(project.name);

    project.todos.forEach((todo) => {
      const newTodo = new Todo(
        todo.title,
        todo.desc,
        todo.date,
        todo.priority,
        todo.completed
      );
      newProject.newTodo(newTodo);
    });
    projects.push(newProject);
  });

  console.log(projects);
  return projects;
}
