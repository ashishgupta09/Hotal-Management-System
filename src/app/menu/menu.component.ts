import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  roomData:any;

  constructor(private service:OrderDetailsService){}
  ngOnInit(): void {
   this.roomData=this.service.RoomDetails;
   }
  }


