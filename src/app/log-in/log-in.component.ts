import { Component, OnInit } from '@angular/core';
//import { ReceptFormComponent } from '../recept-form/recept-form.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  username
  password

  constructor() { }

  ngOnInit() {
  }
  loginUser(event){
    if (this.username=="admin" && this.password =="admin")
    { 
      console.log("Welkom op de website!") 
      window.location.replace("src/app/ingelogd/ingelogd.component.html") 
    
    }
    else {
      console.log("Onjuiste username/wachtwoord!")
    }
  }
}
