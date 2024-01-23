import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TacheDetailsPageRoutingModule } from './tache-details-routing.module';

import { TacheDetailsPage } from './tache-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TacheDetailsPageRoutingModule
  ],
  declarations: [TacheDetailsPage]
})
export class TacheDetailsPageModule {}
