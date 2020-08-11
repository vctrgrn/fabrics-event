import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-methode-impression',
  templateUrl: './methode-impression.component.html',
  styleUrls: ['./methode-impression.component.scss']
})
export class MethodeImpressionComponent implements OnInit {
   methodeImpressionTop = [
    {
      'titre': 'flocage',
      'text': 'Motif imprimé sur une feuille, découpé puis pressé à chaud sur le textile. Idéal pour de petites quantités.'
    }, 
    {
      'titre': 'flex',
      'text' : 'Motif imprimé sur une feuille, découpé puis pressé à chaud sur le textile. Couleurs plus resplendissantes, colle appliquée sur le rebord de l’impression. Idéal pour une quantité moyenne.'
    }, 
    {
      'titre': 'serigraphie',
      'text' : 'cadres et pochoirs. L’encre passe à travers le pochoir et se dépose sur le textile ensuite. Les couleurs sont moins resplendissantes qu’une impression numérique mais tiennent très bien avec le temps. Ce procédé reste'
    }
  ]

  methodeImpressionBottom = [
    {
      'titre': 'broderie',
      'text' : 'Motif réalisé à l’aiguille ou à la machine, et ce directement sur le support concerné. Haute qualité.'
    }
    , 
    {
      'titre': 'impression numérique',
      'text' : 'Motif imprimé directement sur le textile avec l’aide d’imprimantes. Malgré un système de personnalisation de haute qualité et un résultat optimal, les couleurs durent moins dans le temps à la différence de la sérigraphie.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
