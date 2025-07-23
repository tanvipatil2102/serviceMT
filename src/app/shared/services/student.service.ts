import { Injectable } from '@angular/core';
import { Istudent } from '../models/student';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentArr : Array<Istudent> = [
    {
      fname : 'Jhon',
      lname : 'Doe',
      email : 'jd@gmail.com',
      contact : 1234567890,
      id : '123'
    },
    {
      fname : 'Jen',
      lname : 'Doe',
      email : 'jd2@gmail.com',
      contact : 2345678901,
      id : '124'
    }
  ]
  constructor(
    private _snackbar : SnackbarService
  ) { }

  fetchAllStudents(){
    return this.studentArr
  }

  createNewStudent(std : Istudent){
    this.studentArr.push(std);
    this._snackbar.openSnackBar(`${std.fname} ${std.lname} Added succesfully !!!`);

  }

  removeStudent(std : Istudent){
    let getIndex = this.studentArr.findIndex(obj => std.id === obj.id)
    this.studentArr.splice(getIndex, 1);
    this._snackbar.openSnackBar(`${std.fname} ${std.lname} Removed succesfully !!!`);
  }
}
