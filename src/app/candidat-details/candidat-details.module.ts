import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidatDetailsPageRoutingModule } from './candidat-details-routing.module';

import { CandidatDetailsPage } from './candidat-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidatDetailsPageRoutingModule
  ],
  declarations: [CandidatDetailsPage]
})
export class CandidatDetailsPageModule {}
