import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
   
  id : number;
  student : Student;
  submitted=false;
  constructor(private route : ActivatedRoute, private router : Router, private studentService : StudentService) { }

  ngOnInit(): void {
    this.student=new Student();
    this.id=this.route.snapshot.params['id'];
    this.studentService.getStudent(this.id)
     .subscribe(data => {
       console.log(data);
       this.student=data;
     }, error => console.log(error));
  }
  updateStudent(){
    this.submitted = false;
    this.studentService.updateStudent(this.student)
     .subscribe(data => {
       console.log(data);
       this.student = new Student();
       this.gotoList();
     }, error => console.log(error));
  }

  onSubmit(){
    this.submitted = true;
    this.updateStudent();
  }

  gotoList(){
    this.router.navigate(['/students']);
  }


}
