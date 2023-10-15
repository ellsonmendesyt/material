import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './Material/Material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { TabilaComponent } from './components/tabila/tabila.component';
@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent,
    TabelaComponent,
    NotificationComponent,
    ModalComponent,
    ModalContentComponent,
    TabilaComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
