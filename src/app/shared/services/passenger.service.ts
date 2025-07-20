import { Injectable } from '@angular/core';
import { Ipassenger } from '../models/passenger';
import { SnackBarService } from './snack-bar.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmPassComponent } from '../components/get-confirm-pass/get-confirm-pass.component';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  passengersArr: Array<Ipassenger> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ]
  constructor(
    private _snackbar : SnackBarService,
    private _matDialog : MatDialog
  ) { }

  fetchAllPAssengers(){
    return this.passengersArr
  }

  onUpdate(obj : Ipassenger){
    let getIndex = this.passengersArr.findIndex(num => obj.id === num.id);
    this.passengersArr[getIndex] = obj;
    this._snackbar.openSnackBar('Passenger Updated Succesfully !!!')
  }

  onRemovePass(obj : Ipassenger){
    let getIndex = this.passengersArr.findIndex(num => obj.id === num.id);
        this.passengersArr.splice(getIndex, 1);
        this._snackbar.openSnackBar('Passenger Removed Successfully !!!')
    
  }
}
