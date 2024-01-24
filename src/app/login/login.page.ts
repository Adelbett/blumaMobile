import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { FormGroup, FormControl, Validators, FormsModule, AbstractControl, FormBuilder } from "@angular/forms";

import { NavigationExtras, Router } from '@angular/router';
import { AppserviceService } from '../services/appservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm!: FormGroup;
  serverError = false;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private service: AppserviceService, private storage: Storage) {

  }
  async ngOnInit() {
    await this.storage.create();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

  }
  login() {
    this.submitted = true;
    let req = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
    console.log(req);

    this.service.login(req).subscribe((res: any) => {
      if (res.api_status == 1) {
        this.storage.set('User', res);
        console.log('user from storage', this.storage.get('User'));

        let navex: NavigationExtras = {
          replaceUrl: true,
        };
        this.router.navigate(["/tabs"], navex);

      } else {
        this.serverError = true;
      }

    },
      (error) => {
        this.loading = false;
        this.serverError = true;
      }
    );


  }


}




