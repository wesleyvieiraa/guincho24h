import { CallService } from './../services/call.service';
import { PortfolioService } from './portfolio.service';
import { Company } from './../_models/company.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: [CallService]
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

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute,
    private callService: CallService
  ) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies() {
    this.loading = true;

    const queryParam = this.route.snapshot.queryParamMap;
    const idCity = Number(queryParam.get('idCity'));

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

    // this.portfolioService.sendWarningCompany(company).subscribe(
    //   response => {
    //     this.loading = false;
    //   }, 
    //   fail => {
    //     this.loading = false;
    //   }
    // );    
  }

  generateWhatsAppLink(number: string) {
    const message = "Olá! Preciso de um guincho";
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url);
  }

  makeCall(phoneNumber: string) {
    this.callService.makeCall(phoneNumber);
  }

  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
}
