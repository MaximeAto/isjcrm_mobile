import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidatsPageRoutingModule } from './candidats-routing.module';

import { CandidatsPage } from './candidats.page';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidatsPageRoutingModule,
    InputTextModule,
    InputTextareaModule

  ],
  declarations: [CandidatsPage]
})
export class CandidatsPageModule {}
