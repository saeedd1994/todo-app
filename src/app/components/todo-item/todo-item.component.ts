import { Component, EventEmitter, Input,Output, TemplateRef,CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  editStatus:boolean=false;
  editTodo: TemplateRef<any>|null = null;
  @Input('todosItem') todo!:{key:Date,text:string,done:boolean};
  @Output() delete=new EventEmitter<Date>();
  @Output() done=new EventEmitter<Date>();
  @Output() edit=new EventEmitter<{key:Date,text:string}>()

  deleteTodo(key:Date)
  {
    this.delete.emit(key)
  }
  toggleTodo(key:Date)
  {
    this.done.emit(key)
  }

  editHandler(key:Date,text:string)
  {
    this.edit.emit({key,text})
  }
  
}
