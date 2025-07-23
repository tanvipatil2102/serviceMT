import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(
    private _uuid : UuidService,
    private _todoService : TodoService
  ) { }

  ngOnInit(): void {
  }

  onTodoFormSubmit(todoForm : NgForm){
    if(todoForm.valid){
      
      let obj = {...todoForm.value, todoId : this._uuid.uuid()}
      this._todoService.createNewTodo(obj);

      todoForm.reset();
      
    }
  }

}
