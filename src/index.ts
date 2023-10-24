import {todoList} from './ToDoList'
import {toDo} from './ToDo'
let tdl : todoList;
let task1 = {
    id : 1,
    Title: "watch death note",
    completed: false,
    deadlineinHours: 10000,
};
let task2 = {
    id : 2,
    Title: "watch attack on titans",
    completed: false,
    deadlineinHours: 20000,
};
let task3 = {
    id : 3,
    Title: "watch one piece",
    completed: false,
    deadlineinHours: 30000,
};
let task4 = {
    id : 1,
    Title: "watch anything else cause i only know these three",
    completed: false,
    deadlineinHours: 40000,
};
let task5 = {
    id : 1,
    Title: "watch gumball",
    completed: false,
    deadlineinHours: 200,
};
let Taskarr : toDo[] = [];
let Todol = new todoList(Taskarr);
Todol.addTask(task1);
Todol.addTask(task2);
Todol.addTask(task3);
Todol.addTask(task4);
Todol.addTask(task5);
Todol.printtasks();
let temptask : toDo|null;
temptask = Todol.markTaskAsCompleted(task2);
if(temptask === null){
    console.log("Task is not found in the to do list");
}
console.log(Todol.deleteTask(task4));
Todol.printtasks();

