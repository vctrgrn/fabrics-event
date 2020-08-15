import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/shared/service/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent implements OnInit {
  listCategoriePhare = [];
  listTop = [];
  listBottom = [];

  constructor(private coategorieService: CategorieService, private router: Router) { }

  ngOnInit(): void {
    this.coategorieService.getCategories().subscribe(
      reponse => {
        this.selectCategoriesPhares(reponse)
      },
      error => {
          console.log(error)
      })
    }
  
    selectCategoriesPhares(data) {
      for(let item of data) {
        if(item.type == 1) {
          this.listCategoriePhare.push(item);
        }
      }
      this.preparerDonneesPourAffichage();
    }

    preparerDonneesPourAffichage() {
        this.listTop.push(this.listCategoriePhare[0], this.listCategoriePhare[1], this.listCategoriePhare[2] )
        this.listCategoriePhare.splice(0,3);
        this.listBottom.push(this.listCategoriePhare[0], this.listCategoriePhare[1], this.listCategoriePhare[2] )

  

    }

    goToListeProduitByCategorie(categ) {
        this.router.navigate(['categorie', {'?': categ.id, '&': categ.title}]);
    }


}
