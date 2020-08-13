import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/shared/service/produit.service';

@Component({
  selector: 'app-page-liste-produits',
  templateUrl: './page-liste-produits.component.html',
  styleUrls: ['./page-liste-produits.component.scss']
})
export class PageListeProduitsComponent implements OnInit {
  categorie;
  listProduitByCategorie = []

  constructor(private route: ActivatedRoute, private produitService: ProduitService) { }

  ngOnInit(): void {
   this.categorie = this.route.snapshot.paramMap.get('categorie');
   console.log(this.categorie)
    this.produitService.getProduitByCategorie().subscribe(
      data => {
          this.preparerDonneesPourAffichage(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  preparerDonneesPourAffichage(data) {
    for(let produit of data) {
      if(produit.id_Categorie == this.categorie) {
        this.listProduitByCategorie.push(produit);
      }
    }
  }

}
