import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  isOpen =  false;
  noticeItem = [
    {
      'titre': '1',
      "class": 'un',
      'text': 'Sélectionnez le ou les produits que vous désirez.'
    }, 
    {
      'titre': '2',
      "class": 'deux',
      'text': 'Sélectionnez ensuite la ou les couleurs souhaitées.'
    }, 
    {
      'titre': '3',
      "class": 'trois',
      'text': "MLe récapitulatif de votre devis s'affichera, et vous pourrez éditer la quantité voulue du produit."
    }, 
    {
      'titre': '4',
      "class": 'quatre',
      'text': 'Validez votre devis. Vous aurez la possibilité de laisser un message pour accompagner celui-ci.'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

  afficherNotice() {
    this.isOpen = !this.isOpen
  }



}
