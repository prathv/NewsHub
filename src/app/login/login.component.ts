import { Component, OnInit } from '@angular/core';
import { DataOpService } from '../data-op.service';
import { Http,URLSearchParams, Headers } from '@angular/http';
import { RouterModule,Router } from '@angular/router';
import { SessionService } from '../session.service';
import {HeaderComponent } from '../header/header.component';
import {NavbarServiceService} from '../navbar-service.service';

import 'rxjs/add/operator/map'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loggedin:boolean;
email:string;
password:string;
NotShowNav:boolean = false;

  constructor(private dataservice:DataOpService, http:Http, private router:Router, private session:SessionService, private nav:NavbarServiceService) { }
  ngOnInit() {
    this.nav.hide();
    if(this.session.getAuthStatus()){
      this.router.navigate(["home"]);
    }
  }

 login(){
   this.dataservice.loginUser({email:this.email,password:this.password}).subscribe((resp)=>{
     console.log(resp);
     if(resp.status == 200){
       console.log(resp);
       this.session.setSession({name:resp.name,email:resp.email,source:resp.source});
       this.proceed();
    }
    else{
      document.getElementById("status").innerHTML = "Incorrect Credentials, Please Try Again";
    }
   })
 }


 proceed(){
   this.router.navigate(['/home']);
 }
}
