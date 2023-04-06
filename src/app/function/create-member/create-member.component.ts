import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/services/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {
   
  member:Member=new Member();

  constructor(private memberService:MemberService,private router:Router){}

  ngOnInit(): void {   
  }

  saveMember(){
   this.memberService.createMember(this.member).subscribe(data=>{
    console.log(data);
    this.goToMemberList();
   },
   error=>console.error(error));
  }

  goToMemberList(){
   this.router.navigate(['/members']);
  }

  onSubmit(){
  console.log(this.member);
  this.saveMember();
  }
}
