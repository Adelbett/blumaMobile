import { Component, OnInit } from '@angular/core';
import { ProfService } from '../services/prof.service';
import { AppserviceService } from '../services/appservice.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  segment = 'chats';
  prof: any;
  showSearchList: boolean = false;

  filteredProf: any[] = []; recentChats: any[] = [];
  messageService: any

  constructor(private service: AppserviceService) { }
  ngOnInit() {
    this.getprofesseur()

  }
  newchat() {
  }


  filterProf(event: any) {
    // Réinitialiser la liste filtrée
    this.filteredProf = [];
    const searchTerm = event.target.value;



    // Vérifier si le terme de recherche est vide
    if (searchTerm === '') {
      // Si le terme de recherche est vide, réinitialiser la liste filtrée

      this.filteredProf = this.prof.data;
    } else {
      // Sinon, filtrer les professeurs en fonction du terme de recherche
      this.filteredProf = this.prof.data.filter((prof: any) => {
        // Concaténer le nom et le prénom du professeur en une seule chaîne
        const fullName = prof.nom.toLowerCase() + ' ' + prof.prenom.toLowerCase();
        // Accéder à a lpropriété value de $event.target si $event.target est défini, sinon retourner une chaîne vide
        const searchTermLowerCase = searchTerm?.toLowerCase() ?? '';
        // Retourner true si le terme de recherche est présent dans la chaîne concaténée
        return fullName.indexOf(searchTermLowerCase) > -1;
      });
    }
  }


  getprofesseur() {


    return this.service.getprofesseur().subscribe((res: any) => {

      this.prof = res


    })

  }


}

