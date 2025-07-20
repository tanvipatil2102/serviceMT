import { Injectable } from '@angular/core';
import { Istudent } from '../models/student';
import { SnackBarService } from './snack-bar.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmStudentComponent } from '../components/get-confirm-student/get-confirm-student.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentArr : Array<Istudent> = [
    {
      fname : 'Jhon',
      lname: 'Doe',
      email: 'jd@gmail.com',
      contact : 123456890,
      id : '123'
    },
    {
      fname : 'Jem',
      lname: 'Doe',
      email: 'jd@gmail.com',
      contact : 234568901,
      id : '124'
    }
  ]
  constructor(
    private _snackBar : SnackBarService,
    private _matDialog : MatDialog
  ) { }

  createNewStudent(obj : Istudent){
    this.studentArr.push(obj);
    this._snackBar.openSnackBar('New Student Created Successfully !!!');
  }

  fetchAllStudents(){
    return this.studentArr
  }

  removeStd(obj : Istudent){
    let matConfig = new MatDialogConfig()
    matConfig.data = `Are you sure, You want to Remove ${obj.fname} ${obj.lname} student ??`;
    matConfig.width = '500px'
    this._matDialog.open(GetConfirmStudentComponent, matConfig)
    .afterClosed().subscribe(res => {
      if(res){
        let getIndex = this.studentArr.findIndex(num => obj.id === num.id);
        this.studentArr.splice(getIndex, 1);
        this._snackBar.openSnackBar('New Student Removed Successfully !!!');
      }
    })
  }
}
