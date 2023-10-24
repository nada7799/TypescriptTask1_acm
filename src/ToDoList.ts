import {toDo} from './ToDo'
export class todoList{
    constructor(
    private tasks : toDo[]=[],
    ){}
    addTask(t : toDo): void{
        this.tasks.push(t);
    }
    deleteTask(t: toDo): string {
        if(this.tasks.indexOf(t) != -1){
            delete this.tasks [this.tasks.indexOf(t)];
            return "task is deleted";
            }
        return "task is not included in the list";
    }
    markTaskAsCompleted(t: toDo): toDo| null{
        if(this.tasks.indexOf(t) != -1){
        this.tasks [this.tasks.indexOf(t)].completed = true;
        return t;
        }
        return null;
    }
    printtasks(): void{
        this.tasks.forEach(t => {
            console.log(
                t.Title,
                t.completed,
                t.id,
                t.deadlineinHours
            );
        });
    };
    
}