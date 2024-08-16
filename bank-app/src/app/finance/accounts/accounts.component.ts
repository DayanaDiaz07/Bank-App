import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { AuthDataService } from '../../service/auth-data.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent {

  isSavingAccount: boolean = false;
  accounts: any[] = [{
    CodiUser: '',
    NombCuen: '',
    NumeCuen: '',
    id: 0
  }];

  account = {
      CodiUser: '',
      NombCuen: '',
      NumeCuen: '',
  }
  message: string = '';
  otherUserName: string = '';

  constructor(private dataService: DataService, public authService: AuthDataService){}

  ngOnInit(){
    this.dataService.fnGetAccounts(this.authService.userName).subscribe({next: res =>{
      this.accounts = res;
    }});
  }

  getAccounts(){
    this.isSavingAccount = false;
    this.dataService.fnGetAccounts(this.otherUserName).subscribe({next: res =>{
      if (res.length  == 0){
          this.message = "User Not Found"
      }else{
        this.message = '';
        this.accounts = res;
      }
    }});
    this.otherUserName = '';
  }

  getMyOwnAccounts(){
    this.isSavingAccount = false;
    this.dataService.fnGetAccounts(this.authService.userName).subscribe({next: res =>{
      if (res.length  == 0){
        this.message = 'User Not Found';
    }else{
      this.message = '';
      this.accounts = res;
    }
    }});
    this.otherUserName = '';
  }

  saveAccount(){
    this.dataService.fnSaveAccount(this.authService.userName, this.account.NombCuen, this.account.NumeCuen)
    .subscribe({next: res =>{
      if(res[0].Status != 'OK'){
          this.message = res[0].Error
      }
     console.log(res);
    }});
    this.getMyOwnAccounts()
    this.isSavingAccount = false;
  }

  saveAccountAvailable(){
    this.message = '';
    this.isSavingAccount = true;
  }
}
