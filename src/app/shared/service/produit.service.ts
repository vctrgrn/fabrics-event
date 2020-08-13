import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  constructor(private httpClient: HttpClient) { 
  
  }

  public getProduitByCategorie(): Observable<any> {
    return this.httpClient.get<Observable<any>>('http://localhost:3000/produits');
  }
}
