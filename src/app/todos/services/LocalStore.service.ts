import {Injectable} from '@angular/core';
import {ITask} from '../taskInterface';
@Injectable()
export class LocalStoreService {
	getTasks(): Array<ITask> {
		let storedTasks = window.localStorage.getItem('tasks');
		let tasks: Array<ITask> =  storedTasks ? JSON.parse(storedTasks): [];
		return tasks;
	}

	saveTasks(tasks: Array<ITask>): void {
		var tasksToStore = tasks ? JSON.stringify(tasks) : JSON.stringify([]);
		window.localStorage.setItem('tasks', tasksToStore);
	}
}
