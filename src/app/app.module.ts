import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material/material.module';
import { TodoComponent } from './shared/components/todo/todo.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { StudentFormComponent } from './shared/components/student-form/student-form.component';
import { StudentTableComponent } from './shared/components/student-table/student-table.component';
import { PassengerDashboardComponent } from './shared/components/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './shared/components/passenger-count/passenger-count.component';
import { PassengerCardsComponent } from './shared/components/passenger-cards/passenger-cards.component';
import { GetConfirmTodoComponent } from './shared/components/get-confirm-todo/get-confirm-todo.component';
import { GetConfirmStudnetComponent } from './shared/components/get-confirm-studnet/get-confirm-studnet.component';
import { GetConfirmPassengerComponent } from './shared/components/get-confirm-passenger/get-confirm-passenger.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DropDownDirective } from './shared/directives/drop-down.directive';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    StudentFormComponent,
    StudentTableComponent,
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerCardsComponent,
    GetConfirmTodoComponent,
    GetConfirmStudnetComponent,
    GetConfirmPassengerComponent,
    NavbarComponent,
    DropDownDirective,
    
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
