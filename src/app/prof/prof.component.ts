import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppserviceService } from '../services/appservice.service';
// import {AppserviceService } from '../services/apiservice.service';
import { ProfService } from '../services/prof.service';

type Prof = {
  id: number;
  name: string;
  age: string;
  matiere: Array<string>;
  Image?: string;
  niveau: Array<string>;


};



@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.scss'],
})
export class ProfComponent implements OnInit {
  slideopts = {
    initialSlide: 0,
    speed: 400,
    pager: false,
    pagination: false,
    spaceBetween: 20,
  };
  table: Prof[] = [];
  idniv: number = 5;
  niveaux: any;
  selectedNiveauId: any;
  matiere: any;
  formation: any;
  @Input() Filter_niv: any;
  @ViewChild('mySelect') selectRef: any;
  niv: any;

  constructor(private profservice: ProfService,
    private apiservice: AppserviceService) { }

  ngOnInit(): void {

    this.apiservice.getniveau().subscribe((res: any) => {
      console.log(res);
      this.niveaux = res.data;
      console.log(this.niveaux);
    }
    );
    this.getformation();
    this.filterfunction(this.idniv)



  }
  /*filter by id les formation*/

  filterfunction(id: number) {
    this.idniv = id;
    console.log("id", id);
    this.getformation()



  }
  getformation() {

    let req = {
      id_niveau: this.idniv
    }
    console.log("req", req);


    this.apiservice.getformation(req).subscribe((res: any) => {

      this.formation = res.data;
      console.log("this.formation", this.formation)
    })

  }





  // filterfunction(mat: any) {
  //   console.log(event);
  //   let filterarray = [];
  //   this.selectedNiveauId = this.niveaux.id;
  //   console.log("  filterfunction", this.selectedNiveauId)
  //   // for (let i = 0; i < this.table.length; i++) {
  //   //   if (this.table[i].niveau.includes(mat.name)) {
  //   //     filterarray.push(this.table[i]);
  //   //   }
  //   // }

  //   // if (filterarray.length > 0) {
  //   //   this.table = filterarray;
  //   // }

  //   // console.log('professeurs =', this.table);
  // }

  selectMat(ev: any) {
    // this.getProf();
    // this.filtermatiere()
  }

}

