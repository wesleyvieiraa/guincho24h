import { City } from './../_models/cities.model';
import { Observable } from 'rxjs';
import { State } from '../_models/states.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private http: HttpClient) { }

  private baseUrl = `${environment.apiUrl}/`;

  listStates(): Observable<{ states: State[] }> {
    return this.http.get<{ states: State[] }>(`${this.baseUrl}states`);
  }
  
  listCompaniesStates(): Observable<{ states: State[] }> {
    return this.http.get<{ states: State[] }>(`${this.baseUrl}states/customer`);
  }

  listCompaniesCitiesByUf(idUf: any): Observable<{ cities: City[] }> {
    return this.http.get<{ cities: City[] }>(`${this.baseUrl}cities/customer/uf/${idUf}`);
  }
}
