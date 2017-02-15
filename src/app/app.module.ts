import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TaskFilter } from './todos/taskFilter.pipe';
import { AboutComponent } from './about.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    TaskFilter,
    AboutComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'todos',
        component: TodosComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: '',
        redirectTo: '/todos',
        pathMatch: 'full'
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
