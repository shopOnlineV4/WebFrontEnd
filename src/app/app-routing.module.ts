import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { mainModule } from 'process';
import { MainpageModule } from './components/mainpage/mainpage.module';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    loadChildren: () => import('./components/mainpage/mainpage.module').then((m) => m.MainpageModule)
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
