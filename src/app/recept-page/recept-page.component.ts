import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES  } from '../mock-heroes'; //----



@Component({
  selector: 'app-recept-page',
  templateUrl: './recept-page.component.html',
  styleUrls: ['./recept-page.component.css']
})
export class ReceptPageComponent implements OnInit {
  @Input() hero: Hero;
  heroes = HEROES;


  constructor() { }

  ngOnInit() {
  }

}
