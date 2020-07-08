import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainpageRoutingModule } from './mainpage-routing.module';
import { RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
import { ContactComponent } from './contact/contact.component';
import { DetailProudctComponent } from './shop/detail-proudct/detail-proudct.component';
import { ProductsComponent } from './shop/products/products.component';

@NgModule({
  declarations: [
    MainpageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ProductsComponent,
    HomeComponent,
    DetailProudctComponent
  ],
  imports: [
    CommonModule,
     MainpageRoutingModule,
    RouterModule
  ]
})
export class MainpageModule { }
