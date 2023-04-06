
import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  user=new User();
  msg='';

   constructor(private _service:SignupService,private _router:Router) {
    
   }


   ngOnInit() {
   }

   loginUser(){
   this._service.loginUserFromRemote(this.user).subscribe(
    data=>{
      console.log("response recieved");
      this._router.navigate(['/loginsuccess'])
      
  },
    error=>{
      console.log("exception occures");
      this.msg='Bad credebtials,please enter valid emailId and password';
    })
   }
 
   logIn(user:any){
  
   }

   gotoregister(){
    this._router.navigate(['./signup'])
   }
   
 }



