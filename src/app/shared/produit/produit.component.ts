import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.urlImage = this.imagePath + this.image;
  }

  getSrcImage() : string {
      return '../../assets/images/' + this.image
  }

}
