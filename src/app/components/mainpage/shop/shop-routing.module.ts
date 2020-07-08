import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ShopComponent } from './shop.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailProudctComponent } from './detail-proudct/detail-proudct.component';

const routes: Routes = [
  {
    path: 'shop',
       children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: ':id',
        component: DetailProudctComponent
      },
    ]
  }
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShopRoutingModule { }
