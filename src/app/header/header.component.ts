import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../shared/service/categorie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  listCategoriePhare = [];
  listeCategAutre = [];

  constructor(private coategorieService: CategorieService) { }

  ngOnInit(): void {
    this.coategorieService.getCategories().subscribe(
      reponse => {
        this.selectCategoriesPhares(reponse)
      },
      error => {
          console.log(error)
      })
    }
  
    selectCategoriesPhares(data) {
      for(let item of data) {
        if(item.type == 1 && item.title != 'Autres') {
          this.listCategoriePhare.push(item);
        } else {
            this.listeCategAutre.push(item);
        }
      }
    }


}
