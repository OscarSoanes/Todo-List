import './style.css';
import './reset.css';

import Project from './modules/project.js';
import Todo from './modules/todo.js';

let projects = [];

let ProjectTest = new Project("test");
projects.push(ProjectTest);
let newTodo = new Todo("test", "testDesc", "10-12-13", "high");

ProjectTest.newTodo(newTodo);
ProjectTest.newTodo(newTodo);
ProjectTest.newTodo(newTodo);

let NextProject = new Project("more testing");
NextProject.newTodo(newTodo);
NextProject.newTodo(newTodo);

projects.push(NextProject);
console.log(ProjectTest);
console.log(projects);
