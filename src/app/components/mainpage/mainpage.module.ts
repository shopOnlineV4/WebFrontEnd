import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainpageRoutingModule } from './mainpage-routing.module';
import { RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
import { ShopModule } from './shop/shop.module';



@NgModule({
  declarations: [
    MainpageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ShopModule,
    MainpageRoutingModule,
    RouterModule
  ]
})
export class MainpageModule { }
