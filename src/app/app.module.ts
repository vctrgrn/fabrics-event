import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateGeneriqueComponent } from './template-generique/template-generique.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListeProduitsComponent } from './home/liste-produits/liste-produits.component';
import { HomeComponent } from './home/home/home.component';
import { RecapitulatifComponent } from './shared/recapitulatif/recapitulatif.component';
import { NoticeComponent } from './shared/notice/notice.component';
import { MethodeImpressionComponent } from './home/methode-impression/methode-impression.component';
import { EngagementsComponent } from './home/engagements/engagements.component';
import { SliderClientComponent } from './home/slider-client/slider-client.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateGeneriqueComponent,
    MyComponentComponent,
    HeaderComponent,
    FooterComponent,
    ListeProduitsComponent,
    HomeComponent,
    RecapitulatifComponent,
    NoticeComponent,
    MethodeImpressionComponent,
    EngagementsComponent,
    SliderClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
