import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceptFormComponent }      from './recept-form/recept-form.component'; // RECEPT-FORM COMPONENT
import { HeaderComponent } from './header/header.component';
import { AddReceptComponent } from './add-recept/add-recept.component';
import { ReceptPageComponent } from './recept-page/recept-page.component';
import { LogInComponent } from './log-in/log-in.component'; //LOGIN COMPONENT
import { RegisterComponent } from './register/register.component'; //REGISTER COMPONENT
import { WwVergetenComponent } from './ww-vergeten/ww-vergeten.component'; //WACHTWOORD VERGETEN COMPONENT
import { IngelogdComponent } from './ingelogd/ingelogd.component'; //INGELOGDE PAGINA 

const routes: Routes = [
  { path: '', 
  component: HeaderComponent},

  { path: '', 
  component: AddReceptComponent},

  { path: 'recept-form', 
  component: ReceptFormComponent },

  { path: 'recept-page', 
  component: ReceptPageComponent },
  
  { path: 'log-in', 
  component: LogInComponent },

  { path: 'log-in/wwVergeten', 
  component: WwVergetenComponent },

  { path: 'register', 
  component: RegisterComponent },
  
  { path: 'log-in/ingelogd', 
  component: IngelogdComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}