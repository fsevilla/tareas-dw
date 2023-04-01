import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/modules/auth/auth.service';
import { Credenciales } from 'src/app/shared/interfaces/credenciales';
import { LoginService } from 'src/app/shared/services/login.service';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credenciales: Credenciales = {
    email: '',
    password: ''
  }

  error: boolean = false;

  constructor(private loginService: LoginService, private authService: AuthService, private router: Router) { }

  iniciarSesion(): void {
    this.loginService.login(this.credenciales).subscribe({
      next: (response) => {
        console.log('Login: ', response);
        this.error = false;
        this.authService.setToken(response.token);
        this.router.navigate(['todos']);
      },
      error: () => {
        this.error = true;
      }
    });
  }

}

