import { empty } from "./clear";

export function setAsForm(projects, index, parent) {
  const currentProject = document.querySelector("#task-heading");
  const filteredProjects = projects.find((project) => {
    return project.name === currentProject.textContent;
  });
  const task = filteredProjects.todos[index];

  const container = document.createElement("form");
  container.classList.add("edit-task-container");

  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.disabled;

  const title = document.createElement("input");
  title.type = "text";
  title.setAttribute("id", "text");
  title.placeholder = "title";
  title.value = task.title;
  title.required;

  const date = document.createElement("input");
  date.type = "date";
  date.setAttribute("id", "date");
  date.required;
  date.value = task.date;

  const select = document.createElement("select");
  select.setAttribute("id", "selected");

  let options = ["High", "Medium", "Low"];
  options.forEach((option) => {
    const optionEl = document.createElement("option");
    optionEl.value = option.toLowerCase();
    optionEl.text = option;
    select.appendChild(optionEl);
  });
  console.log(task.priority);
  select.value = task.priority;

  const desc = document.createElement("input");
  desc.type = "text";
  desc.setAttribute("id", "desc");
  desc.placeholder = "description";
  desc.value = task.desc;

  const buttonSave = document.createElement("button");
  buttonSave.classList.add("edit-save");
  buttonSave.textContent = "Save";

  const buttonCancel = document.createElement("button");
  buttonCancel.classList.add("edit-cancel");
  buttonCancel.textContent = "Cancel";

  empty(parent);

  container.append(
    checkbox,
    title,
    date,
    select,
    desc,
    buttonSave,
    buttonCancel
  );
  parent.appendChild(container);
}
