import { NgModule } from '@angular/core';
import {MatSlideToggleModule} from "@angular/material/slide-toggle"
import {MatSliderModule} from "@angular/material/slider"
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from "@angular/material/snack-bar"
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from "@angular/material/dialog"
@NgModule({
  imports: [

  ],
  exports:[
    MatSlideToggleModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,

  ],
  declarations: []
})
export class MaterialModule { }
