import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncubationHubPageRoutingModule } from './incubation-hub-routing.module';

import { IncubationHubPage } from './incubation-hub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncubationHubPageRoutingModule
  ],
  declarations: [IncubationHubPage]
})
export class IncubationHubPageModule {}
