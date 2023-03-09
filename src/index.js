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

let badTodo = new Todo("bad", "bad", "2019-20-12", "low");
ProjectTest.newTodo(badTodo);
console.log(ProjectTest);

ProjectTest.removeTodo("bad");
console.log(ProjectTest);