import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPhonePageRoutingModule } from './edit-phone-routing.module';

import { EditPhonePage } from './edit-phone.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    FormsModule,
    IonicModule,
    EditPhonePageRoutingModule
  ],
  declarations: [EditPhonePage]
})
export class EditPhonePageModule { }
