import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecapitulatifService {


  isProducts = false;
  recap = []

  isProductsVisibilityChange: Subject<boolean> = new Subject<boolean>();
  recapSubject: Subject<any> = new Subject<any>();

  constructor()  {
      this.isProductsVisibilityChange.subscribe((value) => {
          this.isProducts = value
      });
      this.recapSubject.subscribe((value) => {
        this.recap = value
    });
  }


  public addProduct(produit) {
    this.recap.push(produit);
    this.recapSubject.next(this.recap);
    this.toggleRecapVisibility();
  }

  public removeProduct(produit) {
    this.recap = this.recap.filter(item => item.id !== produit.id);
    this.recapSubject.next(this.recap);
    this.toggleRecapVisibility();
  }

  public getRecap() {
    this.recapSubject.next(this.recap);
  }


  public toggleRecapVisibility() {
    if(this.recap.length > 0 ) {
      this.isProducts = true;
      this.isProductsVisibilityChange.next(this.isProducts);
    } else {
      this.isProducts = false;
      this.isProductsVisibilityChange.next(this.isProducts);
    }
      
  }



}
