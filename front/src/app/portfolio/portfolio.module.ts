import { BrowserModule } from '@angular/platform-browser';
import { PortfolioComponent } from './portfolio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ModalModule.forRoot(),
  ]
})
export class PortfolioModule { }
