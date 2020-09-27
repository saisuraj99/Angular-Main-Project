import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from '../exam';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {

  exam : Exam = new Exam();
  submitted = false;

  constructor(private examService : ExamService,
    private router : Router) { }

  ngOnInit(): void {
  }

  newExam() : void{
    this.submitted = false;
    this.exam = new Exam();
  }

  save(){
    this.examService
     .addExam(this.exam).subscribe(data => {
       console.log(data)
       this.exam = new Exam();
       this.gotoList();
     }, error => console.log(error));
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/exams']);
  }
}