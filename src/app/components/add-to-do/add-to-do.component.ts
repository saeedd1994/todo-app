import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent implements OnInit {

  @Output('add') addTodo=new EventEmitter<string>();
  textTodo:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.textTodo.length > 0)
      {
        this.addTodo.emit(this.textTodo)
        this.textTodo=''
      }
  }
}
