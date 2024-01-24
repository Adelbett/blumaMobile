import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppserviceService } from '../services/appservice.service';
// import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
// import { ActionSheet } from '@capacitor/action-sheet';
import { Plugins } from '@capacitor/core';

// import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-editprofil',
  templateUrl: './editprofil.page.html',
  styleUrls: ['./editprofil.page.scss'],
})
export class EditprofilPage implements OnInit {
  user: any
  public imageUrl: string | undefined;
  imgs: any

  public loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private service: AppserviceService, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();

    this.storage.get('User').then((res: any) => {
      console.log('profile  edit =', res);
      this.user = res;
    });
    this.loginForm = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      date: [''],
      tel: ['']
    })


  }
  // async getpicture(): Promise<void> {
  //   const image = await Camera.getPhoto({
  //     quality: 90,
  //     allowEditing: true,
  //     resultType: CameraResultType.Uri,
  //     source: CameraSource.Prompt,
  //   });

  //   this.imageUrl = image.webPath;
  //   console.log(this.imageUrl);
  // }

  updatePhoto(req: any) {
    this.service.uplod_photo(req).subscribe((res) => {
      console.log(res);
    });
  }
  // async upload(sourceType: any) {
  //   try {
  //     const image = await Camera.getPhoto({
  //       quality: 50,
  //       allowEditing: false,
  //       resultType: CameraResultType.Base64,
  //       source: sourceType === 0 ? CameraSource.Photos : CameraSource.Camera,
  //     });

  //     const fileName = '0' + this.user.id + '_' + Date.now() + '.jpeg';
  //     const file_to_upload: any = {
  //       name: fileName,
  //       file: 'data:image/jpeg;base64,' + image.base64String,
  //       folder: 'profilepic',
  //     };

  //     this.service.upload_document(file_to_upload).subscribe(
  //       (resp: any) => {
  //         this.imgs =
  //           'http://161.97.151.200/new-eat-to-eat/public/uploads/profilepic/' +
  //           fileName;

  //         const req = {
  //           id: this.user.id,
  //           photo: 'uploads/profilepic/' + fileName,
  //         };

  //         this.updatePhoto(req);
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  //   } catch (error) {
  //     console.log('Erreur lors de la capture ou de la sélection de l\'image', error);
  //   }
  // }
  // async pickPhotoOption() {

  //   const actionSheetOptions = {
  //     header: 'Options',
  //     buttons: [
  //       {
  //         text: 'Choisissez à partir de la galerie',
  //         icon: 'images',
  //         handler: () => {
  //           this.upload(0);
  //         },
  //       },
  //       {
  //         text: 'Prendre une photo',
  //         icon: 'camera',
  //         handler: () => {
  //           this.upload(1);
  //         },
  //       },
  //       {
  //         text: 'Annuler',
  //         icon: 'close',
  //         role: 'cancel',
  //       },
  //     ],
  //     options: [] // Empty options array as per the type definition

  //   };

  //   await ActionSheet.showActions(actionSheetOptions);
  // }

  // async pickPhotoOption() {
  //   const actionSheet = await this.actionSheetCtrl.create({
  //     mode: 'ios',
  //     buttons: [
  //       {
  //         text: 'Choisissez à partir de la galerie.',
  //         icon: 'images',
  //         handler: () => {
  //           this.upload(0);
  //         },
  //       },
  //       {
  //         text: 'Prendre une photo',
  //         icon: 'camera',
  //         handler: () => {
  //           this.upload(1);
  //         },
  //       },
  //     ],
  //   });
  //   await actionSheet.present();
  // }
  enregstrier() {
    let req = {
      id: this.user.id,
      nom: this.loginForm.get('nom')?.value ? this.loginForm.get('nom')?.value : this.user.nom,
      prenom: this.loginForm.get('prenom')?.value,
      date_naissance: this.loginForm.get('date')?.value,
      num_tel: this.loginForm.get('tel')?.value,
    }
    console.log('req =', req);
    // if (req.nom === "" || req.prenom === "" || req.date_naissance === "" || req.num_tel === "") {
    //   // Affectation des valeurs précédentes aux champs vides
    //   this.loginForm.setValue({
    //     prenom: this.user?.prenom || '',
    //     nom: this.user?.nom || '',
    //     date: this.user?.date_naissance || '',
    //     tel: this.user?.num_tel || ''
    //   });
    // } else {
    this.service.editpeofil(req).subscribe((res: any) => {
      console.log("res", res)
      if (res.api_status === 1) {
        let req2 = {
          id: this.user.id

        }
        this.service.getUserById(req2).subscribe((user_res: any) => {
          console.log('user_res', user_res);
          this.storage.set('User', user_res).then(() => { });
          console.log('user from storage', this.storage.get('User'));
          this.router.navigate(['/tabs/tab4']);

        })

      }
      // this.user.nom = this.loginForm.get('nom')?.value,
      //   this.user.prenom = this.loginForm.get('prenom')?.value,
      //   this.user.date_naissance = this.loginForm.get('date')?.value,
      //   this.user.num_tel = this.loginForm.get('tel')?.value;

      // this.service.presentToastWithOptions('Your Informations Saved');
    })

  }


}

