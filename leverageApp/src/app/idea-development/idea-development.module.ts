import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { IdeaDevelopmentPageRoutingModule } from './idea-development-routing.module';

import { IdeaDevelopmentPage } from './idea-development.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeaDevelopmentPageRoutingModule,
    HttpClientModule
  ],
  declarations: [IdeaDevelopmentPage],
})
export class IdeaDevelopmentPageModule {}
