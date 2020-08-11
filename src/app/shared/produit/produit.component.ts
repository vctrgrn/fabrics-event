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
  image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
