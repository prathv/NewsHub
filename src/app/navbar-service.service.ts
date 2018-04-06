import { Injectable } from '@angular/core';

@Injectable()
export class NavbarServiceService {
visible:boolean ;

  constructor() {this.visible = false }

  hide(){
    this.visible = false;
  }

  show(){
    this.visible = true;
  }

  

}
