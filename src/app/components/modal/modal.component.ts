import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {


   constructor(private modal:MatDialog){}

   openModal(){
    let premioModalRef=this.modal.open(ModalContentComponent,{data:{
      name:"Elson"
    }})
    premioModalRef.afterClosed().subscribe((result)=>{console.log(result)})
   }
}
