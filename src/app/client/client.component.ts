import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  title="Client List";
  clients:Client[]=[];

 constructor(private clientService:ClientService,private router:Router){}

ngOnInit(): void {
 this.getClients() 
}

private getClients(){
  this.clientService.getClientList().subscribe(data=>{
    this.clients = data;
  });
  }

  updateClient(id:number){
    this.router.navigate(['update-client',id]);
   }
  
   deleteClient(id:number){
  this.clientService.deleteMember(id).subscribe(data=>{
    console.log(data);
    this.getClients();
  })
 }

 clientDetails(id:number){
  this.router.navigate(['clientdetails',id]);
 }

}
