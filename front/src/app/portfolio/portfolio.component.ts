import { PortfolioService } from './portfolio.service';
import { Company } from './../_models/company.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  companies: Company[] = [];
  company: Company = {
    idCompany: 0,
    name: '',
    idCity: 0,
    description: '',
    image: {
      idImage: 0,
      idCompany: 0,
      path: '',
      fileName: ''
    },
    phone: ''
  };
  loading: boolean = false;
  path = '../../assets/images/ponta-grossa/guincho-02.jpg'

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies() {
    this.loading = true;

    const routeParams = this.route.snapshot.paramMap;
    const idCity = Number(routeParams.get('idCity'));
    
    this.portfolioService.listCompaniesByCity(idCity).subscribe(
      response => {
        this.companies = response.companies;
        this.loading = false;
      }, 
      fail => {
        this.loading = false;
      }
    );
  }

  onClickCompany(company: Company) {
    this.loading = true;
    this.company = company;

    this.portfolioService.sendWarningCompany(company).subscribe(
      response => {
        this.loading = false;
      }, 
      fail => {
        this.loading = false;
      }
    );    
  }

  generateWhatsAppLink(number: string) {
    const message = "Olá! Preciso de um guincho";
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url);
  }
  
}
