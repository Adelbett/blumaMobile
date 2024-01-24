import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AppserviceService } from '../services/appservice.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.page.html',
  styleUrls: ['./newpassword.page.scss'],
})
export class NewpasswordPage implements OnInit {
  confirmpass: any
  Currentpass: any
  serverError: boolean = false;
  code: any
  email: any

  constructor(private router: Router, private route: ActivatedRoute, private storage: Storage, private service: AppserviceService,) { }

  ngOnInit() {
    this.storage.create().then(() => {
      this.storage.get('code').then((code: any) => {
        this.code = code;
        console.log('codeAA', code);

      });
      this.storage.get('email').then((email: any) => {
        this.email = email;
        console.log('codeAA', email);

      });
    });
  }
  editpassword() {
    this.serverError = false

    if (this.confirmpass === this.Currentpass) {
      let req = {
        email: this.email,
        password: this.Currentpass
      }
      console.log("req", req)
      this.service.fgeditpassword(req).subscribe((res) => {
        this.router.navigate(['/fgsucces']);

      });
    }
    else {
      this.serverError = true

    }

  }

}
