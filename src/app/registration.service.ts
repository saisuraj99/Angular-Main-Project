import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = 'http://localhost:8080/login';
  private baseUrl1 = 'http://localhost:8080/registeruser';
 

  constructor( private http : HttpClient) { }
    public loginUserFromRemote(user :User):Observable<any>{
      return this.http.post(`${this.baseUrl}`,user)
    }
    public registerUserFromRemote(user :User):Observable<any>{
      return this.http.post(`${this.baseUrl1}`,user)
    }
  }