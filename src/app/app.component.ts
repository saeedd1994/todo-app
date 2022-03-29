import { isNgTemplate } from '@angular/compiler';
import { Component, IterableDiffers } from '@angular/core';

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

  toggleTodo(key:Date)
  {
   this.todosList=this.todosList.map(item=>
   {
     if(item.key===key)
     {
       return{
         ...item,
         done:!item.done
       }
     }
     return item
   })
  }
}
