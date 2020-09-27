import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Exam } from '../exam';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {

  exams : Observable<Exam[]>;

  constructor(private examService : ExamService,
    private router : Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.exams = this.examService.getExamList();
  }

  addExam(exam : Object){
    this.router.navigate(['addexam', exam]);
  }

}