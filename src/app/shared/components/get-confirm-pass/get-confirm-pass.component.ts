import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm-pass',
  templateUrl: './get-confirm-pass.component.html',
  styleUrls: ['./get-confirm-pass.component.scss']
})
export class GetConfirmPassComponent implements OnInit {
  msg !: string
  constructor(
    private _matref : MatDialogRef<GetConfirmPassComponent>,
    @Inject(MAT_DIALOG_DATA) getMsg : string
  ) { this.msg = getMsg}

  ngOnInit(): void {
  }

  onRemove(flag : boolean){
    this._matref.close(flag);
  }

}
