import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceptFormComponent }      from './recept-form/recept-form.component'; // RECEPT-FORM COMPONENT
import { HeaderComponent } from './header/header.component';
import { AddReceptComponent } from './add-recept/add-recept.component';
import { ReceptPageComponent } from './recept-page/recept-page.component';

const routes: Routes = [
  { path: '', 
  component: HeaderComponent},

  { path: '', 
  component: AddReceptComponent},

  { path: 'recept-form', 
  component: ReceptFormComponent },

  { path: 'recept-page', 
  component: ReceptPageComponent },

// andere schermen moeten hier ook in met een naam

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}