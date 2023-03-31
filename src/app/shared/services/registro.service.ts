import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Registro } from '../interfaces/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private httpClient: HttpClient) { }

  registrar(datos: Registro): Observable<any> {
    const url: string = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.post(url, datos);
  }
}
