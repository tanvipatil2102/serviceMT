import { Injectable } from '@angular/core';
import { Ipassenger } from '../models/passenger';
import { SnackbarService } from './snackbar.service';

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
    private _snackbar : SnackbarService
  ) { }

  fetchAllPassengers(){
    return this.passengersArr
  }

  updatePassValue(pass : Ipassenger){
    let getIndex = this.passengersArr.findIndex(num => pass.id === num.id)
    this.passengersArr[getIndex] = pass
    this._snackbar.openSnackBar(`${pass.fullname} Updated succesfully !!!`);

  }

  removePass(pass : Ipassenger){
    let getIndex = this.passengersArr.findIndex(num => pass.id === num.id)
    this.passengersArr.splice(getIndex, 1)
    this._snackbar.openSnackBar(`${pass.fullname} Removed succesfully !!!`);

  }

}
