import { Component, OnInit } from '@angular/core';
import { DataOpService } from '../data-op.service';
import { Http,URLSearchParams, Headers } from '@angular/http';
import { RouterModule,Router,ActivatedRoute } from '@angular/router';
import { SessionService } from '../session.service';
import {NavbarServiceService} from '../navbar-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private session:SessionService,private router:Router, private nav:NavbarServiceService){
  }
  ngOnInit() {
    this.nav.show();
  }

  logout(){
    this.session.endSession();
    this.router.navigate(['login']);
  }

}
