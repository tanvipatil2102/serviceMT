import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm-todo',
  templateUrl: './get-confirm-todo.component.html',
  styleUrls: ['./get-confirm-todo.component.scss']
})
export class GetConfirmTodoComponent implements OnInit {
  msg !: string;
  constructor(
    private _matRf : MatDialogRef<GetConfirmTodoComponent>,
    @Inject(MAT_DIALOG_DATA) getMsg : string
  ) {this.msg = getMsg }

  ngOnInit(): void {
  }

  onRemove(flag : boolean){
    this._matRf.close(flag);
  }

}
