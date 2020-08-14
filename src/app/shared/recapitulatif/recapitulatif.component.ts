import { Component, OnInit } from '@angular/core';
import { RecapitulatifService } from '../service/recapitulatif.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.scss']
})
export class RecapitulatifComponent implements OnInit {

  asideVisible: boolean;
  recap= []

  constructor(public recapService: RecapitulatifService) {
    this.asideVisible = recapService.isProducts;
    this.recap = this.getRecap();
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




  






