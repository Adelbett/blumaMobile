import { Component, Input, OnInit } from '@angular/core';
import { AppserviceService } from '../services/appservice.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profmatiere',
  templateUrl: './profmatiere.component.html',
  styleUrls: ['./profmatiere.component.scss'],
})
export class ProfmatiereComponent implements OnInit {
  id: any
  prof: any
  @Input() id_mat: any;
  @Input() id_niv: any;
  noResults = 'Aucun résultat trouvé';

  constructor(private http: HttpClient, private router: Router, private service: AppserviceService, private route: ActivatedRoute,) {

  }

  ngOnInit() {
    this.getprofbyidmatiere()
    console.log("id_mat", this.id_mat);
    console.log("id_niv", this.id_niv);

  }

  getprofbyidmatiere() {
    let req = {
      id_matiere: this.id_mat,
      id_niveau: this.id_niv

    }

    this.service.getprofbyidmatiere(req).subscribe((res: any) => {
      this.prof = res.data
      console.log('prof', this.prof)

    });

  }
}
