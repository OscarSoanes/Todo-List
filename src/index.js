import './style.css';
import './reset.css';

import Project from './modules/project.js';
import Todo from './modules/todo.js';

const element = document.createElement('p');
element.textContent = "Hi"
element.classList.add("Hello");

document.body.append(element);

let ProjectTest = new Project("test");
let newTodo = new Todo("test", "testDesc", "10-12-13", "high");

ProjectTest.newTodo(newTodo);

console.log(ProjectTest);
