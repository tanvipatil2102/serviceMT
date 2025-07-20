import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Istudent } from '../../models/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  stdArr !: Array<Istudent>
  constructor(
    private _studentService : StudentService
  ) { }

  ngOnInit(): void {
    this.stdArr = this._studentService.fetchAllStudents();
  }

  onRemove(std : Istudent){
    this._studentService.removeStd(std);
  }

}
