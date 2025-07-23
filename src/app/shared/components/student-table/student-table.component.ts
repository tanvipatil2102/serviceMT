import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmPassengerComponent } from '../get-confirm-passenger/get-confirm-passenger.component';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  stdArr !: Array<Istudent>
  constructor(
    private _studentService : StudentService,
    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.stdArr = this._studentService.fetchAllStudents();
  }

  onRemove(std : Istudent){

    let matConfig = new MatDialogConfig()
                matConfig.data = 'Are You Sure, You want to remove this Student ??'
                matConfig.width = '450px'
            
                this._matDialog.open(GetConfirmPassengerComponent, matConfig)
            
                    .afterClosed().subscribe(res => {
                      if(res){
                       this._studentService.removeStudent(std)
                      }
                    })
  }
}
