import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/shared/service/produit.service';
import { RecapitulatifService } from 'src/app/shared/service/recapitulatif.service';

@Component({
  selector: 'app-page-liste-produits',
  templateUrl: './page-liste-produits.component.html',
  styleUrls: ['./page-liste-produits.component.scss']
})
export class PageListeProduitsComponent implements OnInit {
  idCategorie;
  nomCategorie;
  listProduitByCategorie = []
  asideVisible: boolean;
  isAdd = false;
  recap = {};

  constructor(private route: ActivatedRoute, private produitService: ProduitService, private recapService: RecapitulatifService) { 
    this.asideVisible = recapService.isProducts;
    this.recap = recapService.recap;
  }

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
        produit.isAdd = false;
        this.listProduitByCategorie.push(produit);
      }
    }
  }

  addProduitToRecap(produit) {

  }

toggleRecap(produit) {
  if(!produit.isAdd) {
    produit.isAdd = true;
    this.recapService.addProduct(produit);
  } else {
    produit.isAdd = false;
    this.recapService.removeProduct(produit);
  }
}


}
