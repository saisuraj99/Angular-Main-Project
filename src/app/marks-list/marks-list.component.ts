import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Marks } from '../marks';
import { MarksService } from '../marks.service';

@Component({
  selector: 'app-marks-list',
  templateUrl: './marks-list.component.html',
  styleUrls: ['./marks-list.component.css']
})
export class MarksListComponent implements OnInit {

  marks : Observable<Marks[]>;

  constructor(private marksService : MarksService,
    private router : Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.marks = this.marksService.getMarksList();
  }

  updateMarks(studid : number){
    this.router.navigate(['updatemarks', studid]);
  }

}