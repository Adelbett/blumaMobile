import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { ProfmatiereComponent } from '../profmatiere/profmatiere.component';
import { CalenderComponent } from '../components/calender/calender.component';
import { NgCalendarModule } from 'ionic2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [DetailsPage, ProfmatiereComponent, CalenderComponent]
})
export class DetailsPageModule { }
