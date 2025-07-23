import { Injectable } from '@angular/core';
import { Itodo } from '../models/todo';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoArr : Array<Itodo> = [
    {
      todoItem : 'HTML',
      todoId : '1'
    },
    {
      todoItem : 'CSS',
      todoId : '2'
    }
  ]
  constructor(
    private _snackbar : SnackbarService
  ) { }

  fetchAllTodos(){
    return this.todoArr
  }

  createNewTodo(todo : Itodo){
    this.todoArr.push(todo);
    this._snackbar.openSnackBar(`${todo.todoItem} added succesfully !!!`);

  }

  removeTodo(obj : Itodo){
    let getIndex = this.todoArr.findIndex(num => obj.todoId === num.todoId)
    this.todoArr.splice(getIndex, 1);
    this._snackbar.openSnackBar(`${obj.todoItem} removed succesfully !!!`);
  }
}
