import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  private baseUrl = 'http://localhost:8080/marks';

  private baseUrl1 = 'http://localhost:8080/mark';

  constructor(private http : HttpClient) { }

  getMarks(studid : number) : Observable<any>{
    return this.http.get(`${this.baseUrl1}/${studid}`);
  }

  addMarks(mark : Object) : Observable<Object>{
    return this.http.post(`${this.baseUrl1}`, mark);
  }

  updateMarks(mark : Object) : Observable<Object>{
    return this.http.put(`${this.baseUrl1}`, mark);
  }

  getMarksList() : Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}