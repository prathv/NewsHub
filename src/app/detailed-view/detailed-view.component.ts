import { Component, OnInit } from '@angular/core';
import { DataOpService } from '../data-op.service';
import { Http,URLSearchParams, Headers } from '@angular/http';
import { RouterModule,Router,ActivatedRoute } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {
  topHeadlines:any;
  constructor(private http:Http, private router:Router, private dataservice:DataOpService,private route:ActivatedRoute, private session:SessionService) { }

  ngOnInit() {
    if(!this.session.getAuthStatus()){
      this.router.navigate(['login']);
    }
     this.route.params.subscribe(params => {
       let sources:any;
       sources = params;
       this.dataservice.getNews(sources).subscribe((resp)=>{
         console.log(resp);
         if(resp.status = "ok"){
           this.topHeadlines = resp.articles;
         }
       }
       )
      });
  }

  save(article){
    console.log(article.story);
      this.session.addSaved(article.story);
  }

  viewSaved(){
    this.router.navigate(['saveddetailed']);
  }


}
