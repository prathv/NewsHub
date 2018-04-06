import { Component, OnInit } from '@angular/core';
import { DataOpService } from '../data-op.service';
import { Http,URLSearchParams, Headers } from '@angular/http';
import { RouterModule,Router } from '@angular/router';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string="";
  password:string="";
  email:string="";

  constructor(private dataservice:DataOpService, private router:Router) { }

  ngOnInit() {

  }

  register(){
    this.dataservice.registerUser({name:this.name,password:this.password,email:this.email}).subscribe((resp)=>{
      console.log(resp);
      if(resp.status = 200){
        this.proceed();
      }
    })
  }

  proceed(){
    this.router.navigate(['/login']);
  }
}
