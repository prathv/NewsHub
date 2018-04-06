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
    if(!this.session.getAuthStatus()){
      this.router.navigate(['login']);
    }

    this.dataservice.getSources().subscribe((resp)=>{
        var self = this;
        self.newsSources=resp.sources;
    })
  }
  select(data){
    if(this.selected.length < 5 && !this.selected.includes(data.source.id))
    this.selected.push(data.source.id);
  }

  viewSaved(){
    this.router.navigate(['saveddetailed']);
  }

  display(){
    this.sources = this.selected.join();
    this.router.navigate(['detailed',this.sources]);
  }

  displayOne(data){
    this.router.navigate(['detailed',data.source.id]);
  }
}
