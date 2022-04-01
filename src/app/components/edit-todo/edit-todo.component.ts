import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent  {

  @Input('text') todoText!:string
  @Output() edit=new EventEmitter<string>()

  editHandler()
  {
    if(this.todoText.length>0)
      this.edit.emit(this.todoText)
  }

  

}
