import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TachesPageRoutingModule } from './taches-routing.module';

import { TachesPage } from './taches.page';
import { TreeSelectModule } from 'primeng/treeselect';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TachesPageRoutingModule,
    TreeSelectModule
  ],
  declarations: [TachesPage]
})
export class TachesPageModule {}
