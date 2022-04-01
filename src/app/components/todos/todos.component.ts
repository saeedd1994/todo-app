import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent  {

  @Input() todos!:Array<{key:Date,text:string,done:boolean}>;
  @Output() delete=new EventEmitter<Date>()
  @Output() done=new EventEmitter<Date>()
  @Output() edit=new EventEmitter<{key:Date,text:string}>()
  deleteTodo(key:Date)
  {
    this.delete.emit(key)
  }
  toggleTodo(key:Date)
  {
  this.done.emit(key)
  }
  editHandler(todo:{key:Date,text:string}){
    this.edit.emit(todo)
  }
}
