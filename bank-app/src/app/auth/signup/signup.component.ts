import { Component } from '@angular/core';

import { AuthDataService } from '../../service/auth-data.service';
import { DataService } from '../../service/data.service';
import { Data } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  userName: string = '';
  userPass: string = '';
  userEmail: string = '';
  userCel: string = '';
  userCode: string = '';
  message: string = '';


  constructor(public authService: AuthDataService, private dataService: DataService){}

  signUp(){
    console.log('SIGNUP');
    this.dataService.fnSignUp(this.userCode, this.userName, this.userPass).subscribe({next: res =>{
      if(res[0].Error != undefined){
        this.message = res[0].Error 
      }
      console.log(res);
    }, error: err => {
        console.log(err);
    }});

  }

  cancel(){
    this.authService.isSignUp = false;
  }

}
