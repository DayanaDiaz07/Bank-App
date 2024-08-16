import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent { 
  
  
  typeOptions: string[] = ['Depositos', 'Retiros'];
  stateOptions: string[] = ['Activo', 'Inactivo'];
  type: string = '';
  numberAccount: string = '';
  amount: string = '';
  category: string = '';
  description: string = '';
  state: string = '';
  message: string = '';
  isTransaction: boolean = false;

  transactions: any[] = [
  ];
  
  constructor(private dataService: DataService){}

  saveTransaction(){
    this.dataService.fnSaveTransaction(
      this.type,
      this.numberAccount,
      this.amount,
      this.category,
      this.description,
      this.state
    ).subscribe({next: res =>{
      console.log(res);
    if (res[0].Status == 'Error'){
        this.message = res[0].Error;
    }else{
      this.transactions = this.calcularBalance(res)
      this.isTransaction = true;
      
    }
    }});
  }

  calcularBalance(transactions: any[]): any[] {
    let saldo: number = 0;
    for (var i = transactions.length - 1; i >= 0; i--) {
      if (transactions[i].Type == 'Retiro') {
        saldo -= transactions[i].Amount;
      } else {
        saldo += transactions[i].Amount;
      }
      transactions[i].Balance = saldo;
    }
    return transactions;
  }

}
