import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AddMarksComponent } from './add-marks/add-marks.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { HomeComponent } from './home/home.component';
import { MarksListComponent } from './marks-list/marks-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateMarksComponent } from './update-marks/update-marks.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path:'', redirectTo:'students',pathMatch:'full' },
  {path:'students',component:StudentListComponent},
  {path:'student',component:AddStudentComponent},
  {path:'add-student',component:AddStudentComponent},
  { path: 'update/:id', component: UpdateStudentComponent },
  { path: 'details/:id', component: StudentDetailsComponent },
  { path: '', redirectTo: 'exam', pathMatch: 'full'},
  { path: 'exams', component: ExamListComponent },
  { path: 'addexam', component: AddExamComponent },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'mark', pathMatch: 'full'},
  { path: 'marks', component: MarksListComponent },
  { path: 'addmarks', component: AddMarksComponent},
  { path: 'updatemarks/:id', component: UpdateMarksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
