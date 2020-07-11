import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { mainModule } from 'process';
import { MainpageModule } from './components/mainpage/mainpage.module';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./components/mainpage/mainpage.module').then((m) => m.MainpageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./components/user/user.module').then((m) => m.UserModule)
  },
   {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
