import { Company } from './../_models/company.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  private baseUrl = `${environment.apiUrl}/`;

  listCompaniesByCity(idCity: any): Observable<{ companies: Company[] }> {
    return this.http.get<{ companies: Company[] }>(`${this.baseUrl}companies/id/${idCity}`);
  }

  sendWarningCompany(company: Company): Observable<{ status: boolean }> {
    return this.http.post<{ status: boolean }>(`${this.baseUrl}sendMessage`, company);
  }
}
