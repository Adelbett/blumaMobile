import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../services/appservice.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-fgpassword',
  templateUrl: './fgpassword.page.html',
  styleUrls: ['./fgpassword.page.scss'],
})
export class FgpasswordPage implements OnInit {
  messageText: any;
  serverError: boolean = false;
  code: any
  email: any


  user: any
  constructor(private service: AppserviceService, private storage: Storage, private router: Router,) { }

  ngOnInit() {
    this.storage.create();


  }
  forgotpassword() {
    this.serverError = false; // Réinitialise serverError à chaque appel
    this.storage.get('User').then((res: any) => {
      this.user = res;
      let req = {
        email: this.messageText,
      };

      return this.service.forgotpassword(req).subscribe((res: any) => {
        console.log(res);
        this.code = res.code;
        this.email = res.email;
        console.log('code:', this.code);
        console.log('email:', this.email);
        if (res.api_status == 1) {
          this.storage.set('code', this.code);
          this.storage.set('email', this.email);
          this.router.navigate(['/code']);
        } else {
          this.serverError = true;
        }
      });
    }
    );
  }
}