import { Component } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-para',
  template: `<p >{{conteudo}}</p>`,
  styles: ['p { background:#111; font-weight: thin;color:gold;font-size:1rem }']
})
export class ParaTeste {
  conteudo="Isso ta muito massa!!"
}





@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {



  constructor(private snack:MatSnackBar) {
  }

   abrirNotificacao(msg:string,action:string){
      const cadastroSnack= this.snack.open(msg,action,{duration:3000})

      // ver se foi desconsiderado
      cadastroSnack.afterDismissed().subscribe(()=>{
        this.snack.open("Filho da puta tu não escolheu nada", "vai te fuder",{duration:1000})
      })
      // pegar o resultado da ação
      cadastroSnack.onAction().subscribe(()=>{
        this.snack.open("Bom garoto, ganhou o premio", "regatar premio",{duration:5000});
      })

   }

   abrirNotificacaoPersonalizada(){
      this.snack.openFromComponent(ParaTeste,{duration:5000})
   }

}
