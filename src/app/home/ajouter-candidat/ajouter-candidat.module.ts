import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterCandidatPageRoutingModule } from './ajouter-candidat-routing.module';

import { AjouterCandidatPage } from './ajouter-candidat.page';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterCandidatPageRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,

  ],
  declarations: [AjouterCandidatPage]
})
export class AjouterCandidatPageModule {}
