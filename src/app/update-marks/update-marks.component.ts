import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marks } from '../marks';
import { MarksService } from '../marks.service';

@Component({
  selector: 'app-update-marks',
  templateUrl: './update-marks.component.html',
  styleUrls: ['./update-marks.component.css']
})
export class UpdateMarksComponent implements OnInit {

  studid : number;
  mark : Marks;
  submitted = false;

  constructor(private route : ActivatedRoute, private router : Router,
    private marksService : MarksService) { }

  ngOnInit(): void {
    this.mark = new Marks();
    this.studid = this.route.snapshot.params['studid'];
    this.marksService.getMarks(this.studid)
     .subscribe(data => {
       console.log(data);
       this.mark = data;
     }, error => console.log(error));
  }

  updateMarks(){
    this.submitted = false;
    this.marksService.updateMarks(this.mark)
     .subscribe(data => {
       console.log(data);
       this.mark = new Marks();
       this.gotoList();
     }, error => console.log(error));
  }

  onSubmit(){
    this.submitted = true;
    this.updateMarks();
  }

  gotoList(){
    this.router.navigate(['/marks']);
  }

}