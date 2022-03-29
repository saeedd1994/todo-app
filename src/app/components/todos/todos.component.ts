import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent  {

  @Input() todos!:Array<{key:Date,text:string,done:boolean}>;
  @Output() delete=new EventEmitter<Date>()
  deleteTodo(key:Date)
  {
    this.delete.emit(key)
  }
}
