import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { CustomHttpService } from './custom-http.service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private customHttp: CustomHttpService ) { }

  test(): string {
    return 'hola mundo';
  }

  buscar(): Observable<any> {
    const headers = {};
    const url: string = environment.apiUrl;   
    return this.customHttp.get(url);
  }

}
