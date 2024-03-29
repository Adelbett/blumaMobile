import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditprofilPageRoutingModule } from './editprofil-routing.module';

import { EditprofilPage } from './editprofil.page';


@NgModule({
  imports: [

    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EditprofilPageRoutingModule
  ],
  declarations: [EditprofilPage]
})
export class EditprofilPageModule { }
