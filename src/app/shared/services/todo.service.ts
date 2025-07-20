import { Injectable } from '@angular/core';
import { Itodo } from '../models/todo';
import { SnackBarService } from './snack-bar.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmTodoComponent } from '../components/get-confirm-todo/get-confirm-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoArr : Array<Itodo> = [
    {
      todoItem : 'HTML',
      todoId : '123'
    },
    {
      todoItem : 'CSS',
      todoId : '124'
    }
  ]
  constructor(
    private _snackBarService : SnackBarService,
    private _matDialog : MatDialog
  ) { }

  createNewTodo(obj : Itodo){
    this.todoArr.push(obj);
    this._snackBarService.openSnackBar('New Todo Item Created Successfully !!!');
  }

  fetchAllTodos(){
    return this.todoArr
  }

  removeTodo(obj : Itodo){
 let matConfig = new MatDialogConfig()
    matConfig.data = `Are you sure, You want to remove ${obj.todoItem} todo ??`
    matConfig.width = '500px'
    this._matDialog.open(GetConfirmTodoComponent, matConfig)
    .afterClosed().subscribe(res=> {
      if(res){
        let getIndex = this.todoArr.findIndex(num => obj.todoId === num.todoId);
        this.todoArr.splice(getIndex, 1);
        this._snackBarService.openSnackBar('Todo Item Removed Succesfully !!!');
      }
    })
  }
}
