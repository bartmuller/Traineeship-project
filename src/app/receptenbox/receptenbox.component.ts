import { Component, OnInit } from '@angular/core';

import { HEROES  } from '../mock-heroes'; //----
import { Hero } from '../hero';

import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-receptenbox',
  templateUrl: './receptenbox.component.html',
  styleUrls: ['./receptenbox.component.css']
})
export class ReceptenboxComponent implements OnInit {

  

  heroes = HEROES;

  selectedHero: Hero;


  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationStart) => this.currentUrl = _.url);
  }

  ngOnInit() {
     
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}

