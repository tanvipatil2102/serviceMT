import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from '../../models/passenger';
import { PassengerService } from '../../services/passenger.service';

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
    private _passService : PassengerService
  ) { }

  ngOnInit(): void {
  }

  onUpdate(pass : Ipassenger,inputFormControl : HTMLInputElement){

    let obj = {...pass, fullname : inputFormControl.value}
    this._passService.onUpdate(obj);
    this.isInEditMode = !this.isInEditMode
  }

  onRemove(pass : Ipassenger){
    this._passService.onRemovePass(pass);
    this.removedArrEmit.emit(pass);
  }

}
