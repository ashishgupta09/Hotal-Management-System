import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/client';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
 
  id:number=0;
  client:Client=new Client();

  constructor(private clientService:ClientService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.clientService.getMemberById(this.id).subscribe(data=>{
      this.client=data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.clientService.updateMember(this.id,this.client).subscribe(data=>{
     this.goToMemberList();
    },
    error => console.log(error));
  }

  goToMemberList(){
   this.router.navigate(['/clients']);
  }

}
