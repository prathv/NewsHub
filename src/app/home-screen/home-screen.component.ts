import { Component, OnInit } from '@angular/core';
import { DataOpService } from '../data-op.service';
import { Http,URLSearchParams, Headers } from '@angular/http';
import { RouterModule,Router } from '@angular/router';
import { SessionService } from '../session.service';
import {NavbarServiceService} from '../navbar-service.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(private http:Http, private dataservice:DataOpService, private router:Router, private session: SessionService,private nav:NavbarServiceService) { }
  newsSources:any;
  selected:any[] = [];
  sources:string;

  ngOnInit() {
    this.nav.show();
    console.log(this.session.getAuthStatus());
    if(!this.session.getAuthStatus()){
      this.router.navigate(['login']);
    }

    this.dataservice.getSources().subscribe((resp)=>{
        var self = this;
        console.log(resp);
        self.newsSources=resp.sources;
    })
  }
  select(data){
    console.log(data);
    this.selected.push(data.source.id);

  }

  viewSaved(){
    this.router.navigate(['saveddetailed']);
  }

  display(){
    this.sources = this.selected.join();
    console.log(this.sources);
    this.router.navigate(['detailed',this.sources]);
  }

  displayOne(data){
    console.log(data);
    this.router.navigate(['detailed',data.source.id]);
  }
}
