import { Component, OnInit } from '@angular/core';
import { DataOpService } from '../data-op.service';
import { Http,URLSearchParams, Headers } from '@angular/http';
import { RouterModule,Router,ActivatedRoute } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-detailsaved',
  templateUrl: './detailsaved.component.html',
  styleUrls: ['./detailsaved.component.css']
})
export class DetailsavedComponent implements OnInit {
  savedHeadlines:any;
  constructor(private http:Http, private router:Router, private dataservice:DataOpService,private route:ActivatedRoute, private session:SessionService) { }
  ngOnInit() {
    if(!this.session.getAuthStatus()){
      this.router.navigate(['login']);
    }
    this.savedHeadlines = this.session.returnSaved();
    console.log(this.savedHeadlines);
  }

}
