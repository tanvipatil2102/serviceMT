import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';



const moduleArr = [
  MatSnackBarModule,
  MatDialogModule,
  MatButtonModule,
  MatListModule,
  MatCardModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    moduleArr
  ],
  exports: [
    moduleArr
  ]
})
export class MaterialModule { }
