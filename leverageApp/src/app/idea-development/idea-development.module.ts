import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeaDevelopmentPageRoutingModule } from './idea-development-routing.module';

import { IdeaDevelopmentPage } from './idea-development.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeaDevelopmentPageRoutingModule
  ],
  declarations: [IdeaDevelopmentPage]
})
export class IdeaDevelopmentPageModule {}
