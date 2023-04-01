import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Credenciales } from '../interfaces/credenciales';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(credenciales: Credenciales): Observable<any> {
    const url: string = 'https://dummyjson.com/auth/login';
    return this.httpClient.post(url, {
      username: credenciales.email,
      password: credenciales.password
    });
  }
}
