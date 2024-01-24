import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FgpasswordPageRoutingModule } from './fgpassword-routing.module';

import { FgpasswordPage } from './fgpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FgpasswordPageRoutingModule
  ],
  declarations: [FgpasswordPage]
})
export class FgpasswordPageModule {}
