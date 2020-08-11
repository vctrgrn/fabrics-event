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
    return this.httpClient.get<Observable<any>>('http://localhost:3000/categories');
}
}
