import {Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TaskModel} from './taskModel';
import {TaskFilter} from "./taskFilter.pipe";
import {TodoComponent} from "./todo/todo.component";
import {ITask} from "./taskInterface";
import {LocalStoreService} from "./services/LocalStore.service";
@Component({
	selector: 'app-todo-manager',
	templateUrl: './todos.component.html',
  styleUrls: ['./styles/todos.styles.css'],
  providers: [LocalStoreService]
})
export class TodosComponent {
	private newTask:string = "";
	tasks: Array<ITask> = [];

	constructor(private _ele:ElementRef, private _localStore: LocalStoreService){
    this.tasks = this._localStore.getTasks();
	}

	addTask():void{
    //find the max of id
    if (this.newTask ) {
      let maxId = this.tasks
                  .map(t=>t.id)
                  .sort((a,b)=> a > b ? 1 : -1 )[0] || 0;
      this.tasks = [{
              id: maxId+1, //new one will get max +1
              completed: false,
              description: this.newTask //this._ele.nativeElement.querySelector(".task-name").value
            }].concat(this.tasks);
      this.newTask = "";
      this._localStore.saveTasks(this.tasks);
    }
	}

  updates(evt: any):void{
    if (evt.type === "TASK_UPDATED") {
      this.tasks = [].concat(this.tasks);
    } else if(evt.type === "TASK_DELETE") {
      this.tasks = this.tasks.filter(t=>t.id !== evt.id);
    }  
    this._localStore.saveTasks(this.tasks); 
  }
}
