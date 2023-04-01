import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.authStatus.next(this.isAuth());
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.authStatus.next(true);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  clearToken(): void {
    localStorage.removeItem('token');
    this.authStatus.next(false);
  }

  isAuth(): boolean {
    const token = this.getToken();
    return !!token;
  }
}


