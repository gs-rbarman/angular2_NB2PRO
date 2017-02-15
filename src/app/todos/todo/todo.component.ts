import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ITask} from '../taskInterface';
@Component({
  selector: 'app-todo-item',
  template: `
    <div>
      <input [attr.id]="'_'+_task.id" (change)="updateTask($event.currentTarget.checked)" [checked]="_task.completed" type="checkbox"/>
      <label [attr.for]="'_'+_task.id">{{_task.description}}</label><span (click)='deleteTask()'>&nbsp;X</span>
    </div>
  `,
  styles: []
})
export class TodoComponent implements OnInit {

  @Input("task") private _task:ITask;
  @Output("task-updates") private _taskUpdates:EventEmitter<any> =  new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  updateTask(complete: boolean){
    this._task.completed = complete;
    this._taskUpdates.emit({type:"TASK_UPDATED",id:this._task.id});
  }

  deleteTask(){
    this._taskUpdates.emit({type:"TASK_DELETE",id:this._task.id});
  }

}
