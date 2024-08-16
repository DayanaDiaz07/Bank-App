import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import {fromEvent } from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  userCodeV2: string = ""
  userCode: string = ""
  userName: string = ""
  password: string = ""

  constructor(private dataService: DataService){}

  ngOnInit(): void {

    const evKeyUp = fromEvent(document, 'keyup');
    const result = evKeyUp.pipe(debounceTime(300));
    result.subscribe({next: (x) => {
      var target = x.target as HTMLInputElement;
      if(target.name == 'userCodeV2'){
        this.validateProfile()
      }
      console.log(target);
    }});

  }
  

  validateProfile(){

    this.dataService.fnValidProfile(this.userCodeV2).subscribe({next: res =>{
      this.userName = res[0].NombUsua
      this.password = res[0].PassUser
      console.log(res);
    }});

  }
  

}

