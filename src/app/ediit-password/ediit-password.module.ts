import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdiitPasswordPageRoutingModule } from './ediit-password-routing.module';

import { EdiitPasswordPage } from './ediit-password.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EdiitPasswordPageRoutingModule
  ],
  declarations: [EdiitPasswordPage]
})
export class EdiitPasswordPageModule { }
