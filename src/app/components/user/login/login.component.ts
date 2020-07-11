import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin;
  errors: string;
  constructor(private loginService: UserService) {
    this.userLogin = new UserLogin;

  }

  ngOnInit(): void {

  }

  submitLogin() {
    this.loginService.userLogin(this.userLogin).subscribe(res => {
      if (res) {
        sessionStorage.setItem('token', res.token);
      } else {
        this.errors = "Mật khẩu hoặc tài khoản không đúng";
      }
    });
  }
}
