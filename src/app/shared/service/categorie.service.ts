import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private httpClient: HttpClient) { 
  
  }

  public getCategories(): Observable<any> {
    return this.httpClient.get<Observable<any>>('http://www.labo.fabricsevent.fr/public/api/categories');
  }
}
