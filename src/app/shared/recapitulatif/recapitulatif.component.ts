import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RecapitulatifService } from '../service/recapitulatif.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.scss']
})
export class RecapitulatifComponent implements OnInit {

  quantiteValue = 1;

  asideVisible: boolean;
  recap= []

  constructor(public recapService: RecapitulatifService) {
    this.asideVisible = recapService.isProducts;
    this.recap = this.getRecap();
   }


  updateQuantite(event, produit) {
    this.quantiteValue = event.target.value;
    produit.quantite = event.target.value;
    this.recapService.setQuantiteProduit(produit);
  }

  test(value, produit) {
    console.log(value);
    produit.couleur = value;
    this.recapService.setColorProduit(produit);
  }

  ngOnInit(): void {
  }

  isSidebarVisible(): boolean {
    return this.recapService.isProducts;
  }

  getRecap() : any {
    return this.recapService.recap;
  }

  removeProduit(produit) {
    this.recapService.removeProduct(produit);
  }

}




  






