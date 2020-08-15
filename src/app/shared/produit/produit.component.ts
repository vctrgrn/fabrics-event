import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CouleursService } from '../service/couleurs.service';
import { RecapitulatifService } from '../service/recapitulatif.service';
import { FormControl } from '@angular/forms';
import { Options } from 'ng5-slider/options';

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

  produitForRecap = {
    'id': null,
    'produit': null,
    'couleur': null,
    'quantite': null
  }

  urlImage;
  imagePath='../../../assets/images/'
  isSelectionne = false;
  colorSelectionne = false;
  quantitySelectionne = false;
  listhexaCode = [];

  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    showTicks: true,
    tickStep: 10
  };


  constructor(private couleursService: CouleursService, private recapService: RecapitulatifService) { }

  ngOnInit(): void {
    this.urlImage = this.imagePath + this.image;
    if(this.view != 'home') {
      this.couleursService.getCouleurs().subscribe(
        data => {
          this.preparerDonneesPourAffichage(data);
        }, 
        error => {{}
  
        }
      )
    }
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
      this.produitForRecap.produit = produit;
    } else {
      this.isSelectionne = false;
      this.colorSelectionne = false;
      this.recapService.removeProduct(this.produitForRecap);
      
    }
  }

  selectionneCouleur(couleur) {
    if(!this.colorSelectionne) {
      this.colorSelectionne = true;
      this.produitForRecap.couleur = couleur.couleur;
      this.produitForRecap.id = Math.floor(Math.random() * Math.floor(1000))
      this.recapService.addProduct(this.produitForRecap)
      this.resetView();
    } else {
      this.colorSelectionne = false;
    }
  }

resetView() {
  this.isSelectionne = false;
  this.colorSelectionne = false;
  this.quantitySelectionne = false;
  this.produitForRecap = {
    'id': null,
    'produit': null,
    'couleur': null,
    'quantite': null
  }
}
}
