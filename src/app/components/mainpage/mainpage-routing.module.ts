import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './shop/products/products.component';
import { DetailProudctComponent } from './shop/detail-proudct/detail-proudct.component';


const router: Routes = [
  {
    path: '',
    component: MainpageComponent,
    children: [{
      path: '',
      component: HomeComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'shop',
      children: [
        {
          path: '',
          component: ProductsComponent
        },
        {
          path: ":id",
          component: DetailProudctComponent
        }
      ]
    }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class MainpageRoutingModule { }
