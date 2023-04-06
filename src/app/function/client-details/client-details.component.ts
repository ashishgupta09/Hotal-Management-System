import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/client';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id:number=0;
  client:Client= new Client();

  constructor(private clientService:ClientService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.client=new Client();
    this.clientService.getMemberById(this.id).subscribe(data=>{
      this.client=data;
    })
    
  }



}
