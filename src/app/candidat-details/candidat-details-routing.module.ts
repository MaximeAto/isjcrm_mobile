import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatDetailsPage } from './candidat-details.page';

const routes: Routes = [
  {
    path: '',
    component: CandidatDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatDetailsPageRoutingModule {}
