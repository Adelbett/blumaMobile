import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProfService {

  tabProf = [


    {
      id: 1,
      name: "adel bettaieb",
      Image: "../../assets/image/1bdaba98-9b48-42c5-8043-2a2c8ab15c82.jpg",
      age: "19",
      matiere: ["math"],
      niveau: ['3 ème Seconder', 'bac']
    },
    {
      id: 2,
      name: "yassine ben yalla",
      Image: "assets/image/1bdaba98-9b48-42c5-8043-2a2c8ab15c82.jpg",
      age: "32",
      matiere: ["science"],
      niveau: ['bac']
    },
    {
      id: 3,
      name: "hakim battick",
      Image: "../../assets/image/1bdaba98-9b48-42c5-8043-2a2c8ab15c82.jpg",
      age: "30",
      matiere: ["english", "math"],
      niveau: ['9 ème ']
    },


    {
      id: 3,
      name: "toto bachkouto",
      Image: "../../assets/image/1bdaba98-9b48-42c5-8043-2a2c8ab15c82.jpg",
      age: "30",
      matiere: ["english"],
      niveau: ['7 ème', '8 ème']
    },

    {
      id: 3,
      name: "brahim kardous",
      Image: "../../assets/93691562_2643355309230703_6874984163938664448_n.jpg",
      age: "30",
      matiere: ["english", "science"],
      niveau: ['2 ème Seconder', '1 ème Seconder']
    },
    {
      id: 3,
      name: "yassine battick",
      Image: "../../assets/93691562_2643355309230703_6874984163938664448_n.jpg",
      age: "30",
      matiere: ["informatique", "economie"],
      niveau: ['2 ème Seconder', '3 ème Seconder']
    },
    {
      id: 3,
      name: "amine ben hlal",
      Image: "../../assets/93691562_2643355309230703_6874984163938664448_n.jpg",
      age: "20",
      matiere: ["english", "math ", "frensh"],
      niveau: ['2 ème Seconder', "3 ème Seconder"]
    },
  ]




  constructor() { }


}

