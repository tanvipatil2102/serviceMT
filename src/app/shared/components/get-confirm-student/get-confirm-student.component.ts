import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm-student',
  templateUrl: './get-confirm-student.component.html',
  styleUrls: ['./get-confirm-student.component.scss']
})
export class GetConfirmStudentComponent implements OnInit {
  msg !: string;
  constructor(
    private _matRef : MatDialogRef<GetConfirmStudentComponent>,
    @Inject(MAT_DIALOG_DATA) getMsg : string
  ) { this.msg = getMsg}

  ngOnInit(): void {
  }

  onRemove(flag : boolean){
    this._matRef.close(flag);
  }

}
