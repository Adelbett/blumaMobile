import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { Storage } from '@ionic/storage';

import { ProfService } from '../services/prof.service';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  niveaux: any[] = [];
  currentDate: string;
  matiere: any[] = [];
  user: any

  filterniv: any;

  constructor(private profservice: ProfService, private storage: Storage, public pushNotifications: NotificationsService) {
    const date = new Date();
    const Options = { weekday: "long", month: "long", day: "numeric" };
    this.currentDate = date.toLocaleDateString('fr-FR');
    this.pushNotifications.subscribeTo()
  }
  ngOnInit() {
    this.storage.create();
    this.storage.get('User').then((res: any) => {
      this.user = res;
    });

  }

  filter(ev: any) {
    this.filterniv = ev;
  }
  doRefresh(ev: any) {
    setTimeout(() => {
      ev.target.complete();
    }, 1000)
  }
};



