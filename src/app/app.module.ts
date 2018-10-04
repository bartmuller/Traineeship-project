import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddReceptComponent } from './add-recept/add-recept.component';
import { AppRoutingModule } from './app-routing.module';
import { ReceptFormComponent } from './recept-form/recept-form.component';
import { ReceptenboxComponent } from './receptenbox/receptenbox.component';

import { HttpClientModule } from '@angular/common/http';  // <-Add here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ReceptPageComponent } from './recept-page/recept-page.component';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { IngelogdComponent } from './ingelogd/ingelogd.component';
import { WwVergetenComponent } from './ww-vergeten/ww-vergeten.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddReceptComponent,
    ReceptFormComponent,
    ReceptenboxComponent,
    NavbarComponent,
    ReceptPageComponent,
    RegisterComponent,
    LogInComponent,
    IngelogdComponent,
    WwVergetenComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
