import { Component,OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

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
export class TabilaComponent  {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public texto!:string;
  dataSource= new MatTableDataSource(books);
  public colunas=['id','title','author','category']

 constructor() {}

 ngAfterViewInit() {
  this.dataSource.sort = this.sort;
  this.dataSource.paginator=this.paginator;
  this.paginator._intl.itemsPerPageLabel="itens por pagina";
}

 aplicarFiltro(value:string){
  console.log(value);
  this.dataSource.filter=value.trim().toLowerCase();
 }

debug(info:any){
  console.log(info)
}
}
