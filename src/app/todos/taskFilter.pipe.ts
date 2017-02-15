import {PipeTransform, Pipe} from '@angular/core';
import {ITask} from './taskInterface';

@Pipe({
	name: 'tasksFilter'
})
export class TaskFilter implements PipeTransform {

	transform(tasksModel: Array<ITask>, yes:boolean=true) {
		return tasksModel.filter(function(t){return t.completed === yes}); 
	}
}