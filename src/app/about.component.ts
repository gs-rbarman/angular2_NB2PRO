import {Component} from '@angular/core';
@Component({
	moduleId: module.id,
	selector: 'todo-about',
	templateUrl: './about.component.html',
	styles: [`
		code{
			background: rgba(236,239,241,0.56);
		    border-radius: 2px;
		    font-family: Monaco,"Lucida Console",monospace;
		    color: #00796B;
		    padding: 0 4px;
		    font-size: 90%;
		}
	`]
})
export class AboutComponent {

}