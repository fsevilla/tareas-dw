import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  loginStatus: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.authStatus.subscribe((status: boolean) => {
      console.log('Auth status: ', status);
      this.loginStatus = status;
    });
  }

  logout() {
    this.authService.clearToken();
  }

}
