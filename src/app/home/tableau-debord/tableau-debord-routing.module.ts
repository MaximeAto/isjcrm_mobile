import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableauDebordPage } from './tableau-debord.page';

const routes: Routes = [
  {
    path: '',
    component: TableauDebordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableauDebordPageRoutingModule {}
