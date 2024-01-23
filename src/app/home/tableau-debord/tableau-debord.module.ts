import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableauDebordPageRoutingModule } from './tableau-debord-routing.module';

import { TableauDebordPage } from './tableau-debord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableauDebordPageRoutingModule
  ],
  declarations: [TableauDebordPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TableauDebordPageModule {}
