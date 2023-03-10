import Todo from "../todo";

// Index is from the div
export function updateTodo(index, projects) {
  /**
   * get index
   * get the DOM element at index
   * get the data inside that DOM element e.g text etc
   * store as TODO
   * get the project
   * project.update(index, new todo)
   */
  const parent = document.querySelector(`[index='${index}']`);
  const form = parent.childNodes;

  const completed = form[0][0].value;
  const title = form[0][1].value;
  const date = form[0][2].value;
  const priority = form[0][3].value;
  const desc = form[0][4].value;

  const todo = new Todo(title, desc, date, priority, completed);

  const projectName = document.querySelector("#task-heading");
  const projectToUpdate = projects.find((project) => {
    return project.name === projectName.textContent;
  });

  if (
    !projectToUpdate.validateTodo(title) &&
    title !== projectToUpdate.todos[index].title
  ) {
    return "Error";
  }

  projectToUpdate.updateTodo(index, todo);
}
