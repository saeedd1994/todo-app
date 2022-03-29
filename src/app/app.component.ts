import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todosList:Array<any>=[];

  addTodo(todo:string){

    this.todosList=
    [...this.todosList,
    { key:Date.now(), 
      text:todo,
      done:false}]  
  }

  deleteTodo(key:Date)
  {
    this.todosList=this.todosList.filter((item)=>item.key!==key)
  }
}
