import { Component, OnInit } from '@angular/core';

import { HEROES } from '../mock-heroes'; //----

import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-receptenbox',
  templateUrl: './receptenbox.component.html',
  styleUrls: ['./receptenbox.component.css']
})
export class ReceptenboxComponent implements OnInit {

  

  heroes = HEROES;

  recept = { 
    id: 1, 
    name: 'Mr. Nice' 
  }
 
  titel =  ['lekker kippie', 'pan bami', 'kip'];
  description = [
    'een heerlijk kigerecht dat snel te bereiden is. Bla bla bla bla bla bla bla kip kip.',
    'een heerlijk kigerecht dat snel te bereiden is. Bla bla bla bla bla bla bla kip kip.',
    'een heerlijk kigerecht dat snel te bereiden is. Bla bla bla bla bla bla bla kip kip.',
  ];
 time = [20, 30, 40];
 meal = ['Hoofdgerecht', 'Voorgerecht', 'Dessert'];
 categorie = ['Kip', 'Vegan', 'Rund'];

 


 

 
 
 
 
 
  myRecept = this.titel[0];
  
  

  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationStart) => this.currentUrl = _.url);
  }

  ngOnInit() {
     
  }

}

