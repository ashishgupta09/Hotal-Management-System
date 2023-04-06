import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { MenupageComponent } from './menupage/menupage.component';
import { MemberComponent } from './member/member.component';
import { CreateMemberComponent } from './function/create-member/create-member.component';
import { UpdateMemberComponent } from './function/update-member/update-member.component';
import { ClientComponent } from './client/client.component';
import { MemberDetailsComponent } from './function/member-details/member-details.component';
import { CreateClientComponent } from './function/create-client/create-client.component';
import { UpdateClientComponent } from './function/update-client/update-client.component';
import { ClientDetailsComponent } from './function/client-details/client-details.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
 {path:"login",component:LoginComponent},
 {path:"home",component:HomeComponent},
 {path:"signup",component:SignupComponent},
 {path:"menu",component:MenuComponent},
 {path:"menupage",component:MenupageComponent},
 {path:"member",component:MemberComponent},
 {path:"createmember",component:CreateMemberComponent},
 {path:"update-member/:id",component:UpdateMemberComponent},
 {path:"memberdetails/:id",component:MemberDetailsComponent},
 {path:"client",component:ClientComponent},
 {path:"createclient",component:CreateClientComponent},
 {path:"update-client/:id",component:UpdateClientComponent},
 {path:"clientdetails/:id",component:ClientDetailsComponent},
 {path:"pricing",component:PricingComponent},
 {path:"about",component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
