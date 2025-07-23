import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../models/todo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmPassengerComponent } from '../get-confirm-passenger/get-confirm-passenger.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoArr !: Array<Itodo>
  constructor(
    private _todoService : TodoService,
    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.todoArr = this._todoService.fetchAllTodos();
  }

  onRemoveBtn(todo : Itodo){
   
    let matConfig = new MatDialogConfig()
            matConfig.data = 'Are You Sure, You want to remove this Todo Item ??'
            matConfig.width = '450px'
        
            this._matDialog.open(GetConfirmPassengerComponent, matConfig)
        
                .afterClosed().subscribe(res => {
                  if(res){
                    this._todoService.removeTodo(todo);
                  }
                })
  }

}
