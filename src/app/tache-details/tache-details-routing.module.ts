import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TacheDetailsPage } from './tache-details.page';

const routes: Routes = [
  {
    path: '',
    component: TacheDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TacheDetailsPageRoutingModule {}
