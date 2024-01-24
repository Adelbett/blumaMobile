import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppserviceService } from '../services/appservice.service';
import { Storage } from '@ionic/storage';
import { Console } from 'console';

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.page.html',
  styleUrls: ['./edit-phone.page.scss'],
})
export class EditPhonePage implements OnInit {
  forms: any
  user: any
  constructor(private formBuilder: FormBuilder, private storage: Storage, private http: HttpClient, private router: Router, private service: AppserviceService,) { }

  ngOnInit() {
    this.storage.create();
    this.storage.get('User').then((res: any) => {
      console.log('password  edit =', res);
      this.user = res;
    });
    this.forms = this.formBuilder.group({
      new_email: ['',],
      password: ['',],

    })
  }
  enregistrer() {

    let req = {
      id: this.user.id,
      email: this.forms.get('new_email')?.value,
    };
    this.service.verifemail(req).subscribe((res: any) => {
      console.log("res", res);
      let message: any;
      let messageClass: any;
      if (res.exist === true) {
        console.log("yes");
        message = 'cette adresse email deja exixste  ';
        messageClass = 'error';
      }
      else {
        this.storage.get('password').then((storedPassword: any) => {
          const enteredPassword = this.forms.get('password')?.value;

          if (storedPassword === enteredPassword) {
            let req = {
              id: this.user.id,
              email: this.forms.get('new_email')?.value,
            };
            this.service.editemail(req).subscribe((res: any) => {
              message = 'Le mot de passe est correct et l\'e-mail a été modifié avec succès.';
              messageClass = 'success';
              console.log('res', res);
            });
          } else {
            message = 'Le mot de passe est incorrect. Veuillez réessayer.';
            messageClass = 'error';
          }
        });
      }
      const messageContainer = document.getElementById('message-container');
      if (messageContainer) {
        messageContainer.innerHTML = message;
        messageContainer.classList.add(messageClass);
      }

    })


  }
}







