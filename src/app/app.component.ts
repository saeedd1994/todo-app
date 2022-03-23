import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todosList:any=[];

  addTodo(todo:string){

    this.todosList=
    [...this.todosList,
    { key:Date.now(),
      text:todo,
      done:false}]
    console.log(this.todosList);
  }
}
