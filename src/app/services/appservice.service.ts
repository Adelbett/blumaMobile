import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/providers/toast-controller';

import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  private url: string = "http://38.242.201.117/bluma/public/index.php/api/";
  getHeader() {
    var timeNow = new Date().getTime().toString();
    let auth = Md5.hashStr("2e716761eab5799605b37059a0ec241b" + timeNow + "blumaschool").toString();
    let header: any = new HttpHeaders({
      "X-Authorization-Time": timeNow,
      "X-Authorization-Token": auth,
      "Content-Type": "application/json",
    });
    return header;
  }

  constructor(private http: HttpClient) { }
  item: any
  getniveau() {
    let api = "get_niveau";
    return this.http.post(this.url + api, this.getHeader());
  }
  getformation(req: any) {
    let api = "get_formations";
    return this.http.post(this.url + api, req, this.getHeader());
  }
  getformationbyid(id: any) {
    let api = "get_formation_id";
    return this.http.post(this.url + api, id, this.getHeader());
  }
  editpeofil(req: any) {
    let api = "edit_profil"
    return this.http.post(this.url + api, req, this.getHeader())
  }
  editpassword(req: any) {
    let api = "editpasword"
    return this.http.post(this.url + api, req, this.getHeader())
  }

  login(req: any) {
    let api = "login";
    return this.http.post(this.url + api, req, this.getHeader());
  }
  getprofbyidmatiere(id: any) {
    let api = "get_prof_by_idmatiere"
    return this.http.post(this.url + api, id, this.getHeader())

  }
  editemail(req: any) {
    let api = "editemail"
    return this.http.post(this.url + api, req, this.getHeader())
  }
  verifemail(req: any) {
    let api = "verif_email"
    return this.http.post(this.url + api, req, this.getHeader())
  }
  getUserById(req: any) {
    let api = 'get_user_by_id';
    return this.http.post(this.url + api, req, this.getHeader())

  }
  deleteenfant(req: any) {
    let api = "delete_enfant"
    return this.http.post(this.url + api, req, this.getHeader())
  }
  geteleve(req: any) {
    let api = "get_enfant"
    return this.http.post(this.url + api, req, this.getHeader())
  }
  getenfanrbyid(id: any) {

    let api = " get_enfanr_by_id"
    return this.http.post(this.url + api, id, this.getHeader()
    )
  }
  detailinscription(req: any) {
    let api = "detail_eleve"
    return this.http.post(this.url + api, req, this.getHeader()
    )
  }
  getprofesseur() {
    let api = "get_professeur"
    return this.http.post(this.url + api, this.getHeader())
  }
  getprofchat(req: any) {
    let api = "get_prof_chat"
    return this.http.post(this.url + api, req, this.getHeader())
  }
  forgotpassword(req: any) {
    let api = "forgot_password"
    return this.http.post(this.url + api, req, this.getHeader())
  }
  updatestatumessage(req: any) {
    let api = "update_statu_message"
    return this.http.post(this.url + api, req, this.getHeader())
  }
  emploi(req: any) {
    let api = "get_seances"
    return this.http.post(this.url + api, req, this.getHeader())
  }
  uplod_photo(req: any) {
    let api = "udate_photo"
    return this.http.post(this.url + api, req, this.getHeader())
  }
  upload_document(req: any) {
    let header = { headers: { 'Content-Type': 'application/octet-stream' } };
    let api =
      'http://38.242.201.117/bluma/public/pictureupload/upload.php';
    return this.http.post(api, req, header);
  }
  fgeditpassword(req: any) {
    let api = "fg_edit_password"
    return this.http.post(this.url + api, req, this.getHeader())
  }




  // async presentToastWithOptions(message: any) {
  //   const toast = await this.toastController.create({
  //     message: message,
  //     position: 'bottom',
  //     duration: 1000
  //   });
  //   await toast.present();
  // }


}


