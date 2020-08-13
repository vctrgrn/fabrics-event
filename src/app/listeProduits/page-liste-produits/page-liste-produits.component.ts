import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/shared/service/produit.service';

@Component({
  selector: 'app-page-liste-produits',
  templateUrl: './page-liste-produits.component.html',
  styleUrls: ['./page-liste-produits.component.scss']
})
export class PageListeProduitsComponent implements OnInit {
  idCategorie;
  nomCategorie;
  listProduitByCategorie = []

  constructor(private route: ActivatedRoute, private produitService: ProduitService) { }

  ngOnInit(): void {
   this.idCategorie = this.route.snapshot.paramMap.get('idCategorie');
   this.nomCategorie = this.route.snapshot.paramMap.get('nomCategorie');
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
      if(produit.id_Categorie == this.idCategorie) {
        this.listProduitByCategorie.push(produit);
      }
    }
  }

}
