import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private baseUrl = 'http://localhost:8080/exams';

  private baseUrl1 = 'http://localhost:8080/exam';

  constructor(private http : HttpClient) { }

  getExam(id : String) : Observable<any>{
    return this.http.get(`${this.baseUrl1}/${id}`);
  }

  addExam(exam : Object) : Observable<Object>{
    return this.http.post(`${this.baseUrl1}`, exam);
  }

  getExamList() : Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}