import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { StudentFormComponent } from './shared/components/student-form/student-form.component';
import { StudentTableComponent } from './shared/components/student-table/student-table.component';
import { GetConfirmTodoComponent } from './shared/components/get-confirm-todo/get-confirm-todo.component';
import { GetConfirmStudentComponent } from './shared/components/get-confirm-student/get-confirm-student.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material/material.module';
import { PassengerDashboardComponent } from './shared/components/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './shared/components/passenger-count/passenger-count.component';
import { PassengerCardComponent } from './shared/components/passenger-card/passenger-card.component';
import { GetConfirmPassComponent } from './shared/components/get-confirm-pass/get-confirm-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    StudentFormComponent,
    StudentTableComponent,
    GetConfirmTodoComponent,
    GetConfirmStudentComponent,
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerCardComponent,
    GetConfirmPassComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
