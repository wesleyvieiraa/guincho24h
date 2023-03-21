import { PortfolioModalComponent } from './portfolio-modal/portfolio-modal.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './servicos/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    PortfolioComponent,
    PortfolioModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    MdbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
