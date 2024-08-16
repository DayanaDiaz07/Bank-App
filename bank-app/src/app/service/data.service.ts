import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { CLIENT_RENEG_LIMIT } from 'tls';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //apiUrl: string = 'https://erpapipruebas.azurewebsites.net/api/';

  apiUrlValiUser: string = 'https://erpapipruebas.azurewebsites.net/api/values/valiuser';
  apiUrlGetAccounts: string = 'https://erpapipruebas.azurewebsites.net/api/values/GetAccounts';
  apiUrlValiProfile: string = 'https://erpapipruebas.azurewebsites.net/api/values/valiprof';
  apiUrlSignUp: string = 'https://erpapipruebas.azurewebsites.net/api/values/signup';
  apiUrlSaveAccount: string = 'https://erpapipruebas.azurewebsites.net/api/values/saveAccount';
  apiUrlSaveTransaction: string = 'https://erpapipruebas.azurewebsites.net/api/values/SaveTran';
  

  fnValiUser(CodiUser: string, PassUser: string): Observable<any>{

    let UserInfo: any[] = [];
    UserInfo.push({'CodiUser':CodiUser, 'PassUser': PassUser});

    return this.http.post(this.apiUrlValiUser,UserInfo,httpOptions).pipe(tap((res: any) => {
      return res;
    }));
  }


  fnGetAccounts(CodiUser: string): Observable<any>{
    let User: any[]=[];
    User.push({'CodiUser':CodiUser});

    return this.http.post(this.apiUrlGetAccounts,User,httpOptions).pipe(tap((res: any) => {
      console.log(res);
      return res;
    }));
  }

  fnValidProfile(CodiUser: string){
    let UserInfo: any[] = [];
    UserInfo.push({'CodiUser':CodiUser});

    return this.http.post(this.apiUrlValiProfile, UserInfo,httpOptions).pipe(tap((res: any) => {
      return res;
    }));
  }

  fnSignUp(CodiUser: string, userName: string, userPassword: string){
    let UserInfo: any[] = [];
    UserInfo.push({'CodiUser':CodiUser, 'NombUser':userName, 'PassUser':userPassword});

    return this.http.post(this.apiUrlSignUp, UserInfo,httpOptions).pipe(tap((res: any) => {
      return res;
    }));
  }

  fnSaveAccount(CodiUser: string, accountName: string, accountNumber: string){
    let UserInfo: any[] = [];
    UserInfo.push({'CodiUser':CodiUser, 'NombCuen':accountName, 'NumeCuen':accountNumber});

    return this.http.post(this.apiUrlSaveAccount, UserInfo,httpOptions).pipe(tap((res: any) => {
      return res;
    }));
  }

  fnSaveTransaction(
    Type: string,
    NumeCuen: string,
    Amount: string,
    Categoria: string,
    Descripcion: string,
    Estado: string
  ): Observable<any> {
    let TransactionInfo: any[] = [];
    TransactionInfo.push({
      Type: Type,
      NumeCuen: NumeCuen,
      Amount: Amount,
      Categoria: Categoria,
      Descripcion: Descripcion,
      Estado: Estado,
    });
    return this.http
      .post(this.apiUrlSaveTransaction, TransactionInfo, httpOptions)
      .pipe(
        tap((res: any) => {
          console.log('dataservices_fnSaveTranDataServices:', res);
          return res;
        })
      );
  }

}