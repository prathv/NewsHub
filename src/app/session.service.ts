import { Injectable } from '@angular/core';
import { Http,URLSearchParams, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class SessionService {
  class:string = "SessionService";
  headers:Headers;
  constructor(private http:Http) { }


  getSession():any{
    if(localStorage.getItem("currentuser"))
  	return JSON.parse(localStorage.getItem("currentuser"));
    else
    return null;
  }

  setSession(user){
    let sessionInfo = {user:user,savedArticle:[]};
    sessionInfo.savedArticle.push(user.source);
    console.log(sessionInfo);
    localStorage.setItem('currentuser',JSON.stringify(sessionInfo));
  }

  addSaved(article){
    let currentSession = JSON.parse(localStorage.getItem("currentuser"));
    console.log(currentSession);
    currentSession.savedArticle.push(article);
    localStorage.setItem('currentuser',JSON.stringify(currentSession));
    console.log(localStorage.getItem("currentuser"));
  }

  returnSaved():any{
    if(localStorage.getItem("currentuser")){
      return JSON.parse(localStorage.getItem("currentuser")).savedArticle;
    }
    else{
      return null;
    }
  }
  endSession():any{
    localStorage.clear();
    console.log(localStorage);
  }

  getAuthStatus():boolean{

    return (localStorage.getItem("currentuser"))?true:false;
  }
}
