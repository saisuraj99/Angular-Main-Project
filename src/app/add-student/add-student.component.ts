import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { StudentService } from '../student.service';
import{Student} from '../student';
import{FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentservice:StudentService) { }

  student:Student=new Student();
  submitted=false;

  ngOnInit(): void {
    this.submitted=false;
  }
  studentsaveform=new FormGroup({  
    student_id:new FormControl(),/*('',[Validators.required, Validators.minLength(5) ] ),*/
    student_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    student_dob:new FormControl(),/*('' , [Validators.required , Validators.minLength(5) ] ),*/
    student_email:new FormControl('',[Validators.required,Validators.email]),  
    student_mobile:new FormControl()/*('' , [Validators.required , Validators.minLength(5) ] ),*/
    //student_branch:new FormControl() 
  });  
  
  saveStudent(saveStudent){  
    this.student=new Student(); 
    this.student.student_id=this.StudentId.value;    
    this.student.student_name=this.StudentName.value;
    this.student.student_dob=this.StudentDob.value;  
    this.student.student_email=this.StudentEmail.value;
    this.student.student_mobile=this.StudentMobile.value;  
    //this.student.student_branch=this.StudentBranch.value;  
    this.submitted = true;  
    this.save();  
  }  
  
    
  save() {  
    this.studentservice.createStudent(this.student)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.student = new Student();  
  }  
  
  get StudentId(){  
    return this.studentsaveform.get('student_id');  
  } 

  get StudentName(){  
    return this.studentsaveform.get('student_name');  
  }  

  get StudentDob(){  
    return this.studentsaveform.get('student_dob');  
  } 
  
  get StudentEmail(){  
    return this.studentsaveform.get('student_email');  
  }  
  
  get StudentMobile(){  
    return this.studentsaveform.get('student_mobile');  
  }  
  
  addStudentForm(){  
    this.submitted=false;  
    this.studentsaveform.reset();  
  }  

}
