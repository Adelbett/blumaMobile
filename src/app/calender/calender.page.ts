import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent, CalendarMode } from 'ionic2-calendar';
import { CalenderComponent } from '../components/calender/calender.component';
import { AppserviceService } from '../services/appservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';


import { Storage } from '@ionic/storage';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {
  @ViewChild(CalendarComponent)
  myCal!: CalendarComponent;

  constructor(private popoverController: PopoverController, private service: AppserviceService, private storage: Storage, private router: Router,
    private route: ActivatedRoute,) { }

  eventSource: any[] = [];
  user: any

  viewTitle: any;
  calender = {
    mode: 'week' as CalendarMode,
    currentDate: new Date(),
    // hourSegments: 1, // Divide each hour into 1-minute segments
    // slotDuration: {
    //   hours: 16 // Display 14 hours at a time (from 8 AM to 10 PM)
    // },
  };





  ngOnInit() {
    this.storage.create();
    this.storage.get('User').then((res) => {
      this.user = res;
    })
    this.emploi()
  }
  async showPopover(event: any) {
    console.log("bebut ");

    const popover = await this.popoverController.create({
      component: PopupComponent,
      componentProps: { selectedDate: event.startTime, seance: event.eleve, matiere: event.matiere, debut: event.debut, fin: event.fin },
      event: event,
      translucent: true
    });
    return await popover.present();
    console.log("bebut ");

  }

  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }
  onViewTitleChanged(title: any) {
    this.viewTitle = title;
  }
  emploi() {
    this.storage.get('User').then((res) => {
      this.user = res;
      let req = {
        id: 56
      }
      this.service.emploi(req).subscribe((res: any) => {
        console.log('res', res)
        const events: any[] = [];
        res.data.seances.forEach((seance: any) => {
          const dateStr = `${seance.date}T${seance.heure_debut}`;
          const startTime = new Date(dateStr);
          const endTime = new Date(`${seance.date}T${seance.heure_fin}`);
          const eleve = `${seance.eleve}`;
          const matiere = `${seance.matiere_nom}`;
          const debut = `${seance.heure_debut}`;
          const fin = `${seance.heure_fin}`;


          const title = `${seance.matiere_nom} - ${seance.nom}`;
          events.push({ title, startTime, endTime, eleve, matiere, debut, fin });
          console.log('startTime', startTime)
          console.log('endTime', endTime);
          console.log('title', title);


        });
        this.eventSource = events;
      })
    })

  }

}
