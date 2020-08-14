import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CouleursService } from '../service/couleurs.service';
import { RecapitulatifService } from '../service/recapitulatif.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  @Input()
  nomCategorie: string;
  @Input()
  optionalClass: string;
  @Input()
  listColor;
  @Input()
  image: string;
  @Input()
  view: string;

  urlImage;
  imagePath='../../../assets/images/'
  isSelectionne = false;
  colorSelectionne = false;
  quantitySelectionne = false;
  listhexaCode = [];

  constructor(private couleursService: CouleursService, private recapService: RecapitulatifService) { }

  ngOnInit(): void {
    this.urlImage = this.imagePath + this.image;
    this.couleursService.getCouleurs().subscribe(
      data => {
        this.preparerDonneesPourAffichage(data);
      }, 
      error => {{}

      }
    )
  }
  preparerDonneesPourAffichage(data) {
    let listColorTmp = data;
    for(let idColor1 of this.listColor) {
      for(let idColor2 of listColorTmp) {
          if(idColor1 == idColor2.id) {
            this.listhexaCode.push(idColor2)
          }
      }
    }
  }


  getSrcImage() : string {
      return '../../assets/images/' + this.image
  }

  selectionneItem() {
      this.isSelectionne = !this.isSelectionne;
  }

  selectionneProduit(produit) {
    if(!this.isSelectionne) {
      this.isSelectionne = true;
      this.recapService.addProduct(produit);
    } else {
      this.isSelectionne = false;
      this.recapService.removeProduct(produit);
    }
  }

  selectionneCouleur(couleur) {
    if(!this.colorSelectionne) {
      this.colorSelectionne = true;
    } else {
      this.colorSelectionne = false;
    }
  }


}
