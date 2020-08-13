import { Component, OnInit, Input } from '@angular/core';
import { CouleursService } from 'src/app/shared/service/couleurs.service';

@Component({
  selector: 'app-liste-couleurs',
  templateUrl: './liste-couleurs.component.html',
  styleUrls: ['./liste-couleurs.component.scss']
})
export class ListeCouleursComponent implements OnInit {
  @Input()
  listColor;

  listhexaCode = []

  constructor(private couleursService: CouleursService) { }

  ngOnInit(): void {
    this.couleursService.getCouleurs().subscribe(
      data => {
        this.preparerDonneesPourAffichage(data);
      }, 
      error => {

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

}
