import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { RecapitulatifService } from 'src/app/shared/service/recapitulatif.service';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/shared/service/produit.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
    this.idCategorie = this.route.snapshot.paramMap.get('?');
    this.nomCategorie = this.route.snapshot.paramMap.get('&');
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



}
