import { Injectable } from '@angular/core';
import { Http,URLSearchParams, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class DataOpService {

  server:string="http://localhost:5000/api/";
  constructor(private http: Http) { }


  registerUser(data){
    console.log(data);
    return this.http.post(this.server+"register",{data}).map((resp)=>resp.json());
  }

  loginUser(data){
    return this.http.post(this.server+"login",{data}).map((resp)=>resp.json());
  }

  getSources(){
    return this.http.get(this.server+"news/sources").map((resp)=>resp.json());
  }

  getNews(data){
    return this.http.post(this.server+"news/sources/details",{sources:data}).map((resp)=>resp.json());
  }

  saveArticle(data){
    let email= JSON.parse(localStorage.getItem("currentuser")).user.email;
    return this.http.post(this.server+"news/saveArticle",{source:[data],user:email}).map((resp)=>resp.json());
  }

}
