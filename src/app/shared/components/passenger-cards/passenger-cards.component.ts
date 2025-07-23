import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from '../../models/passenger';
import { PassengerService } from '../../services/passenger.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmPassengerComponent } from '../get-confirm-passenger/get-confirm-passenger.component';

@Component({
  selector: 'app-passenger-cards',
  templateUrl: './passenger-cards.component.html',
  styleUrls: ['./passenger-cards.component.scss']
})
export class PassengerCardsComponent implements OnInit {
  isInEditMode : boolean = false
  @Input() getPassObj !: Ipassenger;
  @Output() emitRemoveFun : EventEmitter<Ipassenger> = new EventEmitter();
  constructor(
    private _passService : PassengerService,
    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  onUpdate(formControlName : HTMLInputElement){
    let obj = {...this.getPassObj, fullname : formControlName.value}
    this._passService.updatePassValue(obj);
    this.isInEditMode = !this.isInEditMode
  }

  onRemoveCard(){
    let matConfig = new MatDialogConfig()
    matConfig.data = 'Are You Sure, You want to remove this Passenger ??'
    matConfig.width = '450px'

    this._matDialog.open(GetConfirmPassengerComponent, matConfig)

        .afterClosed().subscribe(res => {
          if(res){
            this._passService.removePass(this.getPassObj)
            this.emitRemoveFun.emit(this.getPassObj);
          }
        })
  }

}
