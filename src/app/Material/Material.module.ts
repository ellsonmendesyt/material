import { NgModule } from '@angular/core';
import {MatSlideToggleModule} from "@angular/material/slide-toggle"
import {MatSliderModule} from "@angular/material/slider"
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';



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
  ],
  declarations: []
})
export class MaterialModule { }
