import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/services/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

 id:number=0;
 member:Member=new Member();

 constructor(private route:ActivatedRoute,private memberservice:MemberService){}

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];

  this.member=new Member();
  this.memberservice.getMemberById(this.id).subscribe(data=>{
    this.member=data;
  })
}
}
