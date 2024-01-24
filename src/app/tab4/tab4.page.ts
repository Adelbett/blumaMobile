import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public darkMode = false;
  user: any;
  constructor(private alertController: AlertController, private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.storage.create();
    this.storage.get('User').then((res: any) => {
      console.log('profile =', res);
      this.user = res;
    });
  }
  public toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
  logout() {
    this.storage.create().then(() => {
      this.storage.clear();
      let navex: NavigationExtras = {
        replaceUrl: true,
      };

      this.router.navigate([''], navex);
    });
  }
  async alertConfirmLogout() {
    console.log("adel")
    const alert = await this.alertController.create({
      header: "confirmer",
      message: "Êtes-vous sûr  de vouloir vous déconnecter",
      mode: "ios",
      cssClass: "custom-select",
      buttons: [
        {
          text: "Annuler",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            return;
          },
        },
        {
          text: "oui",
          handler: () => {
            this.logout();
          },
        },
      ],

    });
    await alert.present();
    console.log("adel")
  }
  goToEditProfile() {
    this.router.navigate(['/editprofil']);
  }

}

