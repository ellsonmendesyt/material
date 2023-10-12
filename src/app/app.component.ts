import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { pluck } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'curso';
  public isSmallScreen: boolean = false;

  constructor(private bpo: BreakpointObserver) {}

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'push';
  }

  ngAfterContentInit(): void {
    this.bpo.observe(['(max-width:800px']) //verifica se a tela é não passa de 800px
    .pipe(
      pluck('matches') //pluck vai retornar true or false
    )
    .subscribe({
      next: (res:boolean) => {  //então next agora vai receber é um boolean
          this.isSmallScreen = res; //atualiza o campo
      },
    });
  }
}
