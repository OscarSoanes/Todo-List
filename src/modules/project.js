export default class Project {
    constructor(name) {
        this.todos = [];
        this.name = name;
    }

    newTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(title) {
        const filtedTodos = this.todos.filter(todo => {
            return todo.title !== title;
        })

        this.todos = filtedTodos;
    }


    get allTodos() {
        return this.todos;
    }
}