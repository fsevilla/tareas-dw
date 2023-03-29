import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  test(): string {
    return 'hola mundo';
  }

  buscar(): Observable<any> {
    const url: string = 'https://jsonplaceholder.typicode.com/todos';   
    return this.httpClient.get(url);
  }
}
