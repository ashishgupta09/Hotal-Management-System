import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from'@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenupageComponent } from './menupage/menupage.component';
import { MemberComponent } from './member/member.component';
import { CreateMemberComponent } from './function/create-member/create-member.component';
import { UpdateMemberComponent } from './function/update-member/update-member.component';
import { ClientComponent } from './client/client.component';
import { CreateClientComponent } from './function/create-client/create-client.component';
import { UpdateClientComponent } from './function/update-client/update-client.component';
import { MemberDetailsComponent } from './function/member-details/member-details.component';
import { ClientDetailsComponent } from './function/client-details/client-details.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    MenupageComponent,
    MemberComponent,
    CreateMemberComponent,
    UpdateMemberComponent,
    ClientComponent,
    CreateClientComponent,
    UpdateClientComponent,
    MemberDetailsComponent,
    ClientDetailsComponent,
    AboutComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
