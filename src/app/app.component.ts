import { Component, ViewChild } from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout"
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'curso';
  public isSmallScreen:boolean=false;
 

  constructor(private bpo:BreakpointObserver){}

 get sidenavMode(){
  return this.isSmallScreen ? "over": "push";
 }

  ngAfterContentInit(): void {
    this.bpo.observe(['(max-width:800px']).subscribe({
      next:(res)=>{
        if(res.matches){

           this.isSmallScreen=true;

          }else{

            this.isSmallScreen=false;


        }
      }
    })
  }
}
