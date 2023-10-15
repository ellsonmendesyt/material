import {ElementRef, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent, map, pluck, tap } from 'rxjs';




export const SCROLL_CONTAINER='mat-sidenav-content';
export const TEXT_LIMT=60;
export const SHADOW_LIMIT=100;









@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'curso';
  public isSmallScreen: boolean = false;

  public isAbove:boolean=false;
  showText=false;
  applyShadow=false;


  constructor(private bpo: BreakpointObserver) {}

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'push';
  }
  ngOnInit(): void {
  }


  ngAfterViewInit(): void {

    const content=document.getElementsByClassName(SCROLL_CONTAINER)[0];
    fromEvent(content,'scroll')
    .pipe(
      map(()=>content.scrollTop)
    )
    .subscribe({
      next:(value:number)=>this.defineHeader(value)
    })


  }

  defineHeader(top:number){
    this.showText=top>=TEXT_LIMT;
    this.applyShadow=top>=SHADOW_LIMIT;
  }

  ngAfterContentInit(): void {
    this.bpo.observe(['(max-width:800px)'])
    .pipe(
      tap((res)=>{console.log(res.matches)})
    )
    .subscribe((res)=>this.isSmallScreen=res.matches)

    // SCROOL



  }
}
