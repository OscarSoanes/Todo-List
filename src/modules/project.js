export default class Project {
    constructor(name) {
        this.todos = [];
        this.name = name;
    }

    newTodo(todo) {
        this.todos.push(todo);
    }

    get allTodos() {
        return this.todos;
    }
}