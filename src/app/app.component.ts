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

  @ViewChild(MatSidenav) sidenav!:MatSidenav; //!ele pode ser null

  constructor(private bpo:BreakpointObserver){}

  ngAfterContentInit(): void {
    this.bpo.observe(['(max-width:800px']).subscribe({
      next:(res)=>{
        if(res.matches){
           this.sidenav.close();
           this.sidenav.mode="over";
          }else{
            this.sidenav.open();
            this.sidenav.mode="side";

        }
      }
    })
  }
}
