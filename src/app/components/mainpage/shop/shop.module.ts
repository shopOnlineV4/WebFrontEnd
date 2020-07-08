import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ShopComponent } from './shop.component';
import { DetailProudctComponent } from './detail-proudct/detail-proudct.component';

import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations:
    [
      ProductsComponent,
      ShopComponent,
      DetailProudctComponent
    ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
