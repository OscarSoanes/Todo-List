export default class Project {
  constructor(name) {
    this.todos = [];
    this.name = name;
  }

  newTodo(todo) {
    if (this.validateTodo(todo.title)) {
      this.todos.push(todo);
    } else {
      // TODO
      console.error("Todo cannot be the same name!");
    }
  }

  removeTodo(title) {
    const filtedTodos = this.todos.filter((todo) => {
      return todo.title !== title;
    });

    this.todos = filtedTodos;
  }

  validateTodo(title) {
    let result = true;
    this.todos.forEach((todo) => {
      if (todo.title === title) {
        result = false;
      }
    });
    return result;
  }

  updateTodo(index, todo) {
    this.todos[index] = todo;
  }

  switchCompleted(index, todo) {
    this.todos[index].completed = todo.completed;
  }

  get allTodos() {
    return this.todos;
  }
}
