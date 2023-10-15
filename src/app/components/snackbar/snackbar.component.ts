import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'my-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
   constructor(private snackbar:MatSnackBar){}

   ngOnInit(): void {
    this.snackbar.open("Hello","fechar",{
      duration:3000,

    })

   }

   public openSnack(){
   const snackbar= this.snackbar.open("Hello","fechar",{
      duration:2000
    })
    snackbar.afterDismissed().subscribe((_)=>{console.log("Dismissed")})
    snackbar.onAction().subscribe(()=>{console.log("houve interação")})
   }
}
