import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../services/member';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})

export class MemberComponent implements OnInit {

  title="Member List";
  members: Member[]=[];

  constructor(private memberservice:MemberService,private router:Router){}

 ngOnInit():void{ 
  this.getMembers();
}
 
 private getMembers(){
 this.memberservice.getMemberList().subscribe(data=>{
   this.members = data;
 });
 }

 updateMember(id:number){
  this.router.navigate(['update-member',id]);
 }

 deleteMember(id:number){
this.memberservice.deleteMember(id).subscribe(data=>{
  console.log(data);
  this.getMembers();
})
}

memberDetails(id:number){
  this.router.navigate(['memberdetails',id]);
}


}
