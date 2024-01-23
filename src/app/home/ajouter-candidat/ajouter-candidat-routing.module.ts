import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterCandidatPage } from './ajouter-candidat.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterCandidatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterCandidatPageRoutingModule {}
