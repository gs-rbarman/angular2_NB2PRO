import {ITask} from './taskInterface';
export class TaskModel implements ITask {
	public completed: boolean;
	public description: string;

	constructor(taskObj) {
		this.completed =  taskObj.completed;
		this.description = taskObj.description;
	}
}