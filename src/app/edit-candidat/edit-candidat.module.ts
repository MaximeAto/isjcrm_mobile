import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCandidatPageRoutingModule } from './edit-candidat-routing.module';

import { EditCandidatPage } from './edit-candidat.page';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCandidatPageRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
  ],
  declarations: [EditCandidatPage]
})
export class EditCandidatPageModule {}
