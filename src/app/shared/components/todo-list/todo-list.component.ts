import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoArr !: Array<Itodo>;
  constructor(
    private _todoService : TodoService
  ) { }

  ngOnInit(): void {
    this.todoArr = this._todoService.fetchAllTodos();
  }

  onRemove(todo : Itodo){
    this._todoService.removeTodo(todo);
  }

}
