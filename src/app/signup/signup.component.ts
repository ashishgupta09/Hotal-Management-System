import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{ 
 
   user= new User();
  SignUpUserFromRemote: any;
  msg=""

  constructor(private _service:SignupService, private _router:Router){
  }

  ngOnInit(): void {
   }
  
  signUpUser(){
    this._service.SignUpUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response recieved");
        this.msg="Registration success";
      },
      error=>{
        console.log("exception occured");
        this._router.navigate(['/signupsuccess'])
      }
      
     )
      }
    
  

 
 
}
