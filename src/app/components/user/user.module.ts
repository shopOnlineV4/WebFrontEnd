import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routers: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [{
      path: 'login',
      component: LoginComponent,
    },{
      path:'',
      redirectTo: 'login',
      pathMatch : 'full'
    },
    {
      path: 'register',
      component: RegisterComponent
    }, {
      path: 'forgotPassword',
      component: ForgetpasswordComponent
    }
    ]
  }
]

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    ForgetpasswordComponent,
    RegisterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routers),
    FormsModule
  ]
})
export class UserModule { }
