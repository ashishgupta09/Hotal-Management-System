import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})

export class MemberService {
  
  private baseURL="http://localhost:8080/ap/v1/members";

  constructor(private httpclient: HttpClient) {
   }
 
   getMemberList():Observable<Member[]>{
    return this.httpclient.get<Member[]>(`${this.baseURL}`);
   }

   createMember(member:Member):Observable<object>{
    return this.httpclient.post(`${this.baseURL}`,member);
   }

   getMemberById(id:number):Observable<Member>{
    return this.httpclient.get<Member>(`${this.baseURL}/${id}`);
   }

   updateMember(id:number,member:Member):Observable<object>{
    return this.httpclient.put(`${this.baseURL}/${id}`,member);
   }

   deleteMember(id:number):Observable<object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
   }

}
