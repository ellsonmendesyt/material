import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

export interface Book{
  id:string;
  category:string;
  title:string;
  author:string;

}

let books:Book[]=[{
  id:'1',category:'infantil',author:'Michael',title:'Sitio do Picapau'},
  {id:'2',category:'adulto',author:'James',title:'As tranças do rei careca'}
  ]

@Component({
  selector: 'app-tabila',
  templateUrl: './tabila.component.html',
  styleUrls: ['./tabila.component.scss']
})
export class TabilaComponent {
  public texto!:string;
  books= new MatTableDataSource(books);
  public colunas=['id','title','author','category']

 constructor() {}

 aplicarFiltro(value:string){
  console.log(value);
  this.books.filter=value.trim().toLowerCase();
 }

debug(info:any){
  console.log(info)
}
}
