import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {

  isSignUp: boolean = false;
  userName: string = '';


  constructor() { }
}
