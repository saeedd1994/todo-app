import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input('todosItem') todo!:{key:Date,text:string,done:boolean};
  @Output() delete=new EventEmitter<Date>();

  deleteTodo(key:Date)
  {
    this.delete.emit(key)
  }
}
