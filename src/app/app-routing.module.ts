import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReceptFormComponent }      from './recept-form/recept-form.component'; // RECEPT-FORM COMPONENT

const routes: Routes = [
  { path: 'ReceptForm', component: ReceptFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}