import { MyComponentComponent } from './my-component/my-component.component';
import { TemplateGeneriqueComponent } from './template-generique/template-generique.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PageListeProduitsComponent } from './listeProduits/page-liste-produits/page-liste-produits.component';


const routes: Routes = [
  {
    path: '',
    component: TemplateGeneriqueComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'categorie',
        component: PageListeProduitsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
