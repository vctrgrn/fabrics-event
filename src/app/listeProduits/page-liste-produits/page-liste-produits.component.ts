import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-liste-produits',
  templateUrl: './page-liste-produits.component.html',
  styleUrls: ['./page-liste-produits.component.scss']
})
export class PageListeProduitsComponent implements OnInit {
  categorie;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.categorie = this.route.snapshot.paramMap.get('categorie');
   console.log(this.categorie)
  }

}
