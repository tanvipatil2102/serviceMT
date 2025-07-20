import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from '../../models/passenger';
import { PassengerService } from '../../services/passenger.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmPassComponent } from '../get-confirm-pass/get-confirm-pass.component';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {
  @Input() getPassArr !: Array<Ipassenger>;
  @Output() removedArrEmit : EventEmitter<Ipassenger> = new EventEmitter();
  isInEditMode : boolean = false;
  
  constructor(
    private _passService : PassengerService,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onUpdate(pass : Ipassenger,inputFormControl : HTMLInputElement){

    let obj = {...pass, fullname : inputFormControl.value}
    this._passService.onUpdate(obj);
    this.isInEditMode = !this.isInEditMode
  }

  onRemove(pass : Ipassenger){
    let matConfig = new MatDialogConfig()
    matConfig.data = `Are you sure, You want to Remove ${pass.fullname} Passenger ???`
    matConfig.width = '500px'
    this._matDialog.open(GetConfirmPassComponent, matConfig)
    .afterClosed().subscribe(res => {
      if(res){
        this._passService.onRemovePass(pass);
        this.removedArrEmit.emit(pass);
      }
    })
  }

}
