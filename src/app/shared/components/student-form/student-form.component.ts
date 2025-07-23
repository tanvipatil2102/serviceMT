import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  constructor(
    private _uuid : UuidService,
    private _studentService : StudentService
  ) { }

  ngOnInit(): void {
  }

  onStudentFormSub(studentForm : NgForm){
    if(studentForm.valid){
      let obj = {...studentForm.value, id :this._uuid.uuid()}
      this._studentService.createNewStudent(obj);
      studentForm.reset();
    }
  }

}
