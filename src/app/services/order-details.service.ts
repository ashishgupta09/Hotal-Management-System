import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  RoomDetails=[
    {
      id:1,
      roomName:"Quad room",
      roomDetails:"Some hotels classify rooms by the number or size of the beds in the room. However, guests should note that hotels still have restrictions on how many guests are allowed per room.",
      roomPrice:2500,
      roomImg:"./assets/pasted image 0.png",
    },
    {
      id:2,
      roomName:"Double-double room",
      roomDetails:"There are some rooms designated a certain price according to the layout – how big the rooms are, if there’s an adjoining second bedroom, or if there is a kitchen area and living space (making the room a suite).",
      roomPrice:3500,
      roomImg:"./assets/pasted image 0 (1).png",
    },
    {
      id:3,
      roomName:"Presidential suite",
      roomDetails:"Some rooms don’t fit easily into any category because they are entirely unique.  Perhaps a room has certain hotel amenities like access to a club lounge with breakfast and an afternoon wine hour.",
      roomPrice:5500,
      roomImg:"assets/pasted image 0 (2).png",
    },
    {
      id:4,
      roomName:"Penthouse room",
      roomDetails:"Make sure to clearly explain things to guests that may seem obvious to you. To guest adjacent rooms may seem like a suite with living room and bedroom separate but it actually refers to separate rooms next to each other. ",
      roomPrice:4500,
      roomImg:"./assets/pasted image 0 (3).png",
    }
  ]
}
