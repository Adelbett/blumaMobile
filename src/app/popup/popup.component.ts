import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  selectedDate: any;
  seance: any;
  matiere: any;
  fin: any;
  debut: any;

  constructor(private navParams: NavParams) {
    this.selectedDate = this.navParams.get('selectedDate');
    this.seance = this.navParams.get('seance');
    this.matiere = this.navParams.get('matiere');
    this.debut = this.navParams.get('debut');
    this.fin = this.navParams.get('fin');
  }

  ngOnInit() {
    console.log(this.selectedDate);
    console.log(this.seance);
  }
}
