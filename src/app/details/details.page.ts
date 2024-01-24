import { Component, OnInit } from '@angular/core';

import { ProfService } from '../services/prof.service';
import { ActivatedRoute } from '@angular/router';
import { AppserviceService } from '../services/appservice.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: any
  formation: any
  active: any = 'tab1';
  id_matiere: any;
  id_niveau: any
  constructor(private route: ActivatedRoute, private service: AppserviceService) {
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }

  ngOnInit() {
    this.getformation()
  }
  ionViewWillEnter() {
  }
  activetab(tab: any) {
    this.active = tab;
  }
  async getformation() {
    let req = {
      id: this.id
    }

    await this.service.getformationbyid(req).subscribe((res: any) => {


      this.formation = res;
      console.log('test f', res);
      this.id_matiere = this.formation.id_matiere;
      console.log("id_matiere", this.id_matiere);
      this.id_niveau = this.formation.id_niveau;
      console.log("id_niveau", this.id_matiere);
    })

  }


}
