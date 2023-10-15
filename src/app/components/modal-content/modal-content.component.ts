import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent {

//  agora esse componente é capa de receber qq tipo de dado
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {}
}
