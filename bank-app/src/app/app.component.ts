import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthDataService } from './service/auth-data.service';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aegis Bank';

  isUserLog: boolean = false;
  isUserLogTmp: boolean = false;
  userName: string = '';
  userPass: string = '';
  message: string = '';

  constructor(private dataService: DataService, public authService: AuthDataService, private router: Router){}

  ngDoCheck(): void{
    this.isUserLog = this.isUserLogTmp
  }

  logIN(){
    this.dataService.fnValiUser(this.userName,this.userPass).subscribe({next: res =>{
      if (res[0].Status == 'OK'){
        this.isUserLogTmp = true;
        this.message = '';
        this.authService.userName = this.userName;
        this.router.navigate(['home']);
      }else{
        this.isUserLogTmp = false;
        this.message = "user or password incorrect";
      }
    }});
  }

  logOut(){
    this.isUserLogTmp = false;
  }

  signUp(){
    this.authService.isSignUp = true;
  }
}
