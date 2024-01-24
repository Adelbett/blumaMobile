import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnfantPageRoutingModule } from './enfant-routing.module';

import { EnfantPage } from './enfant.page';

@NgModule({
  imports: [ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EnfantPageRoutingModule
  ],
  declarations: [EnfantPage]
})
export class EnfantPageModule { }
