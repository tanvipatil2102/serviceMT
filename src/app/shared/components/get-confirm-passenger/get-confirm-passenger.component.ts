import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm-passenger',
  templateUrl: './get-confirm-passenger.component.html',
  styleUrls: ['./get-confirm-passenger.component.scss']
})
export class GetConfirmPassengerComponent implements OnInit {
  msg !: string;
  constructor(
    private _matRef : MatDialogRef<GetConfirmPassengerComponent>,
    @Inject(MAT_DIALOG_DATA) getMsg : string
  ) { this.msg = getMsg}

  ngOnInit(): void {
  }

  onRemove(flag : boolean){
    this._matRef.close(flag)
  }

}
