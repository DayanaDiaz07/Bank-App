import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralService } from '../../service/general.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  lbolUserLogu: boolean = false;
  

  ldtFecha = new Date();
  lnumValor: number = 123456789;
  lnumPerc: number = 0.87654;
  lstrTexto: string = 'Hoy es la clase del martes';

  constructor(private generalService: GeneralService ){}

  public lSubscription: Subscription = new Subscription;

  fnActiveObserver(){
    this.lSubscription = this.generalService.ResObserver$.subscribe((res: any) => {
      this.lSubscription.unsubscribe();
      console.log(res);
    })
  }


  fnTestObserver(){
    setTimeout(() => {
      console.log('fin de time out');
      this.generalService.fnSetObserver('fin del time out. Simulacion de accion del usuario o trigger')
    }, 5000)
  }


  bolUserLog: Boolean = false;
  lstrUser: String = "";
  lstrPass: String = "";

  LogIn(){
    this.bolUserLog = true;
  }
}
