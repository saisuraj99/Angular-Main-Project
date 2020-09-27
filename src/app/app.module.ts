import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
  import { from } from 'rxjs';
import { StudentService } from './student.service';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { HomeComponent } from './home/home.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AddMarksComponent } from './add-marks/add-marks.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { MarksListComponent } from './marks-list/marks-list.component';
import { UpdateMarksComponent } from './update-marks/update-marks.component';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentListComponent,
    UpdateStudentComponent,
    HomeComponent,
    StudentDetailsComponent,
    AddExamComponent,
    AddMarksComponent,
    ExamListComponent,
    MarksListComponent,
    UpdateMarksComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
    
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
