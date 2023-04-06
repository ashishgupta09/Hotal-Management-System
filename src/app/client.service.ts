import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private baseURL="http://localhost:8080/api/a1/clients";

  constructor(private httpClient:HttpClient) { }

  getClientList():Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseURL}`);
   }

   createMember(client:Client):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,client);
   }

   getMemberById(id:number):Observable<Client>{
    return this.httpClient.get<Client>(`${this.baseURL}/${id}`);
   }

   updateMember(id:number,client:Client):Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,client);
   }

   deleteMember(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
   }
}
