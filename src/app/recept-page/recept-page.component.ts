import { Component, OnInit, Input } from '@angular/core';
import { HEROES  } from '../mock-heroes'; //----
import { Hero } from '../hero';
import { ActivatedRoute } from "@angular/router";
import { DataService } from '../data.service';



@Component({
  selector: 'app-recept-page',
  templateUrl: './recept-page.component.html',
  styleUrls: ['./recept-page.component.css']
})

export class ReceptPageComponent implements OnInit {

 // parentMessage = "message from parent"

  @Input() hero: Hero;
  
  heroes = HEROES;

 
  
  constructor(private route: ActivatedRoute, private data: DataService) { 
     this.route.params.subscribe( params => this.hero = params.id );
  }

  ngOnInit() {
  }

}
