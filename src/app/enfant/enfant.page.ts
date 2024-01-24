import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppserviceService } from '../services/appservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.page.html',
  styleUrls: ['./enfant.page.scss'],
})
export class EnfantPage implements OnInit {
  user: any
  aa: any
  enfants: any[] = [];
  enf: any[] = [];
  donne_enf: any[] = [];
  constructor(private http: HttpClient, private router: Router, private service: AppserviceService, private storage: Storage) { }

  ngOnInit() {
    this.storage.create();
    this.storage.get('User').then((res: any) => {
      console.log('profile  edit =', res.id);
      this.user = res;
    });
    this.resultat()


  }
  delete(id: number) {
    let req = {
      id: id
    }
    console.log("id parent eleve ", id)
    return this.service.deleteenfant(req).subscribe((res: any) => {
      console.log('res', res)
      this.resultat()

      // remove the deleted element from the enf array
      // const index = this.enf.findIndex((item) => item.id === id);


      // if (index > -1) {
      //   this.enf.splice(index, 1);
      // }
      // console.log('this.enf', this.enf)

      // // remove the child's ID from the enfants array
      // const index2 = this.enfants.indexOf(id);
      // console.log('index2', index2);

      // if (index2 > -1) {
      //   this.enfants.splice(index2, 1);
      // }
      // console.log('this.enfants', this.enfants)
    })
  }





  async resultat() {
    this.storage.get('User').then((res: any) => {
      this.user = res;

      let req = {
        id_user_parent: this.user.id,
      }

      this.service.geteleve(req).subscribe((res: any) => {
        console.log('res', res)

        this.enf = res.data;


      });
    });
  }

}




