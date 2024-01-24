
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppserviceService } from '../services/appservice.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-ediit-password',
  templateUrl: './ediit-password.page.html',
  styleUrls: ['./ediit-password.page.scss'],
})
export class EdiitPasswordPage implements OnInit {

  forms!: FormGroup;
  user: any
  constructor(private formBuilder: FormBuilder, private storage: Storage, private http: HttpClient, private router: Router, private service: AppserviceService,) { }

  ngOnInit() {
    this.storage.create();
    this.storage.get('User').then((res: any) => {
      console.log('password  edit =', res);
      this.user = res;
    });
    this.forms = this.formBuilder.group({
      curpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
      confpassword: ['', Validators.required],
    });

  }

  enregistrer() {
    console.log('user from storage', this.storage.get('User'));

    this.storage.get('User').then((storedUser: any) => {

      const storedPassword = storedUser.password;
      const currentpassword = this.forms.get('curpassword')?.value;

      let message = '';
      let messageClass = '';
      let req = {
        email: this.user.email,
        password: this.forms.get('newpassword')?.value
      }
      this.service.login(req).subscribe((res: any) => {
        if (res.api_status == 1) {

          if ((this.forms.get('newpassword')?.value) === (this.forms.get('confpassword')?.value)) {
            let req = {
              id: this.user.id,
              password: this.forms.get('newpassword')?.value
            }
            console.log("req", req)
            this.service.editpassword(req).subscribe((res) => {
              message = 'Le mot de passe est correct et l\'e-mail a été modifié avec succès.';
              messageClass = 'success';
              console.log("res", res)
            });
          } else {
            message = 'Le mot de passe est incorrect. Veuillez réessayer.';
            messageClass = 'error';
          }
          const messageContainer = document.getElementById('message-container');
          if (messageContainer) {
            messageContainer.innerHTML = message;
            messageContainer.classList.add(messageClass);
          }
        }
      });
    });
  }
}

