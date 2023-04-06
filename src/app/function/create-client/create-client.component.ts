import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/client';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  client:Client=new Client();

 constructor(private clientSevice:ClientService,private router:Router){}

  ngOnInit(): void {
   
  }
  saveMember(){
    this.clientSevice.createMember(this.client).subscribe(data=>{
     console.log(data);
     this.goToMemberList();
    },
    error=>console.error(error));
   }
 
   goToMemberList(){
    this.router.navigate(['/clients']);
   }
 
   onSubmit(){
   console.log(this.client);
   this.saveMember();
   }
}
