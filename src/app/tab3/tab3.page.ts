import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from '../services/appservice.service';
import { Storage } from '@ionic/storage';

// import { PhotoViewer } from "@ionic-native/photo-viewer/ngx";
// import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  selectedEnfantId: any;
  user: any
  enf: any[] = [];
  detailinscription: any[] = [];
  constructor(private http: HttpClient, private router: Router, private service: AppserviceService, private storage: Storage) { }
  async ngOnInit() {
    this.storage.create();
    this.storage.get('User').then((res: any) => {
      console.log('profile  edit =', res.id);
      this.user = res;
    });
    await this.resultat()




  }
  onTouchStart(event: TouchEvent) {
    const target = event.target as HTMLElement;
    const wrapper = target.closest('.wrapper');
    if (wrapper) {
      wrapper.classList.add('touched');
    }
  }

  onTouchEnd(event: TouchEvent) {
    const target = event.target as HTMLElement;
    const wrapper = target.closest('.wrapper');
    if (wrapper) {
      wrapper.classList.remove('touched');
    }
  }

  resultat() {
    this.storage.get('User').then((res: any) => {
      this.user = res;



      let req = {
        id_user_parent: this.user.id
      }
      console.log('req', req);
      this.service.geteleve(req).subscribe((res: any) => {
        console.log('res', res)

        this.enf = res.data;
        if (this.enf.length > 0) {
          this.detail(this.enf[0].id_user_eleve);
        }
        else { this.detail(); }



      });
    });
  }

  // detail(id?: any) { }

  detail(id_user_eleve?: any) {
    // if (this.enf.length > 0) {
    //   this.detail(this.enf[0].id_user_eleve);
    // }
    let req = {
      id_user: id_user_eleve
    }
    console.log('ca', req)
    this.service.detailinscription(req).subscribe((res: any) => {
      console.log('detailinscription', res);

      this.detailinscription = res.data








      return null;
    });
  }




}
