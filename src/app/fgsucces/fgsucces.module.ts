import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FgsuccesPageRoutingModule } from './fgsucces-routing.module';

import { FgsuccesPage } from './fgsucces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FgsuccesPageRoutingModule
  ],
  declarations: [FgsuccesPage]
})
export class FgsuccesPageModule {}
