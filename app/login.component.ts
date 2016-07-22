import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: 'app/login.component.html',
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit(username:string , password:string) {
    this.loginService.login(username, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['dashboard']);
      }
    });
  }
}