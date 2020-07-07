import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainpageComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch : 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
