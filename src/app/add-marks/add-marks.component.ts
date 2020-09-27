import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marks } from '../marks';
import { MarksService } from '../marks.service';

@Component({
  selector: 'app-add-marks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.css']
})
export class AddMarksComponent implements OnInit {

  mark : Marks = new Marks();
  submitted = false;

  constructor(private marksService : MarksService,
    private router : Router) { }

  ngOnInit(): void {
  }

  newMarks() : void{
    this.submitted = false;
    this.mark = new Marks();
  }

  save(){
    this.marksService
     .addMarks(this.mark).subscribe(data => {
       console.log(data)
       this.mark = new Marks();
       this.gotoList();
     }, error => console.log(error));
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/marks']);
  }

}