import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddReceptComponent } from './add-recept/add-recept.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddReceptComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
