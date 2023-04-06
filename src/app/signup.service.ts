import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http:HttpClient) { }

  public SignUpUserFromRemote(user:User):Observable<any>{
   return this._http.post("localhost:8080/registeruser",user);
  }
}
