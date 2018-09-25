import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddReceptComponent } from './add-recept/add-recept.component';
import { AppRoutingModule } from './app-routing.module';
import { ReceptFormComponent } from './recept-form/recept-form.component';
import { ReceptenboxComponent } from './receptenbox/receptenbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddReceptComponent,
    ReceptFormComponent,
    ReceptenboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
