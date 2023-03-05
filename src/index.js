import './style.css';
import './reset.css';

const element = document.createElement('p');
element.textContent = "Hi"
element.classList.add("Hello");

document.body.append(element);
