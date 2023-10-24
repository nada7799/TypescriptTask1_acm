"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoList = void 0;
class todoList {
    constructor(tasks = []) {
        this.tasks = tasks;
    }
    addTask(t) {
        this.tasks.push(t);
    }
    deleteTask(t) {
        if (this.tasks.indexOf(t) != -1) {
            delete this.tasks[this.tasks.indexOf(t)];
            return "task is deleted";
        }
        return "task is not included in the list";
    }
    markTaskAsCompleted(t) {
        if (this.tasks.indexOf(t) != -1) {
            this.tasks[this.tasks.indexOf(t)].completed = true;
            return t;
        }
        return null;
    }
    printtasks() {
        this.tasks.forEach(t => {
            console.log(t.Title, t.completed, t.id, t.deadlineinHours);
        });
    }
    ;
}
exports.todoList = todoList;
