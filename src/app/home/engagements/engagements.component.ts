import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagements',
  templateUrl: './engagements.component.html',
  styleUrls: ['./engagements.component.scss']
})
export class EngagementsComponent implements OnInit {
  listEngagements = [
    {
      'title': 'COMPÉTITIVITÉ',
      'icon': 'fa-euro-sign',
      'text': 'Nous nous engageons à vous proposer des tarifs abordables et compétitifs.'
    },
    {
      'title': 'QUALITÉ',
      'icon': 'fa-medal',
      'text':'Nous garantissons que notre travail sera parfaitement réalisé'
    },
    {
      'title': 'RÉACTIVITÉ',
      'icon': 'fa-truck',
      'text': 'Nos délais sont optimum et toujours respectés'
    },
    {
      'title': 'CONFIANCE',
      'icon': 'fa-hands-helping',
      'text': 'Main dans la main, du commencement jusqu’à la finalisation et au suivi de votre projet'
    },
    {
      'title': 'DÉVELOPPEMENT',
      'icon': 'fa-chart-line',
      'text': 'Nous détectons vos besoins et vous conseillons au mieux pour vous faire grandir'
    },
    {
      'title': 'PROFESSIONNALISME',
      'icon': 'fas fa-user',
      'text': 'Plus de 5 ans d’expérience à votre service !'
    }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
