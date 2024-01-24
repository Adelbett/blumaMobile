import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {
  code: any;
  email: any;
  serverError: boolean = false;


  constructor(private router: Router, private route: ActivatedRoute, private storage: Storage) { }
  user: any
  ngOnInit() {
    this.storage.create().then(() => {
      this.storage.get('code').then((code: any) => {
        this.code = code;
        console.log('codeAA', code);
      });
    });
  }
  next(el: any) {
    el.setFocus();
  }
  verifcode() {
    this.serverError = false
    const otp1 = (document.getElementById('otp1') as HTMLInputElement).value;
    const otp2 = (document.getElementById('otp2') as HTMLInputElement).value;
    const otp3 = (document.getElementById('otp3') as HTMLInputElement).value;
    const otp4 = (document.getElementById('otp4') as HTMLInputElement).value;

    const enteredCode = otp1 + otp2 + otp3 + otp4;
    if (this.code == enteredCode) {
      this.router.navigate(['/newpassword']);

    }
    else {
      this.serverError = true;
    }
  }
}
