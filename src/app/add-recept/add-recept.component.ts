import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-add-recept',
  templateUrl: './add-recept.component.html',
  styleUrls: ['./add-recept.component.css']
})
export class AddReceptComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationStart) => this.currentUrl = _.url);
  }

  ngOnInit() {
  }

}
