import { Component } from '@angular/core';
export interface IElement {
  nome: string;
  posicao: number;
  peso: number;
  simbolo: string;
}
const elementos: IElement[] = [
  {posicao: 1, nome: 'Hydrogen', peso: 1.0079, simbolo: 'H'},
  {posicao: 2, nome: 'Helium', peso: 4.0026, simbolo: 'He'},
  {posicao: 3, nome: 'Lithium', peso: 6.941, simbolo: 'Li'},
  {posicao: 4, nome: 'Beryllium', peso: 9.0122, simbolo: 'Be'},
  {posicao: 5, nome: 'Boron', peso: 10.811, simbolo: 'B'},
  {posicao: 6, nome: 'Carbon', peso: 12.0107, simbolo: 'C'},
  {posicao: 7, nome: 'Nitrogen', peso: 14.0067, simbolo: 'N'},
  {posicao: 8, nome: 'Oxygen', peso: 15.9994, simbolo: 'O'},
  {posicao: 9, nome: 'Fluorine', peso: 18.9984, simbolo: 'F'},
  {posicao: 10, nome: 'Neon', peso: 20.1797, simbolo: 'Ne'},
];

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})

export class TabelaComponent {
  // displayedColumns: string[] = ['posicao', 'nome', 'peso', 'simbolo'];
  displayedColumns: string[] = ['posicao', 'nome'];
  dataSource = elementos;
}
