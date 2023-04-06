import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  roomData:any;
  constructor(private service:OrderDetailsService){}

  ngOnInit(): void {
    this.roomData=this.service.RoomDetails;
    
  }

  
  

}
