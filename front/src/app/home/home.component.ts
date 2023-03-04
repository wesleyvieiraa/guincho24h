import { City } from './../_models/cities.model';
import { State } from '../_models/states.model';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  loading: boolean = false;
  states: State[] = [];
  cities: City[] = [];

  formData = {
    idState: null,
    idCity: null,
  };

  constructor (
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCompaniesStatesList();
  }

  loadCompaniesStatesList() {
    this.loading = true;
    this.homeService.listCompaniesStates().subscribe(
      response => {
        this.states = response.states;
        this.loading = false;
      }, fail => {
        // this.messageService.alert('Ocorreu um ou mais erros', "Erro ao carregar as categorias e-commerce.");
        this.loading = false;
      }
    ); 
  }

  listCompaniesCitiesByUf(idUf: any) {
    this.loading = true;
    this.homeService.listCompaniesCitiesByUf(idUf).subscribe(
      response => {
        this.cities = response.cities;
        this.loading = false;
      }, fail => {
        // this.messageService.alert('Ocorreu um ou mais erros', "Erro ao carregar as categorias e-commerce.");
        this.loading = false;
      }
    );
  }

  onChooseCity() {
    this.router.navigate(
      ['/portfolio/' + this.formData.idCity],
    );
  }
}
