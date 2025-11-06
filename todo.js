// todo.js

class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        if (!task || typeof task !== "string") {
            throw new Error("Task must be a non-empty string");
        }
        this.tasks.push({ title: task, done: false });
    }

    markDone(taskTitle) {
        const task = this.tasks.find(t => t.title === taskTitle);
        if (task) task.done = true;
    }

    getPendingTasks() {
        return this.tasks.filter(t => !t.done);
    }

    getAllTasks() {
        return this.tasks;
    }
}

module.exports = TodoList; // Makes this class available to other files (for testing).
