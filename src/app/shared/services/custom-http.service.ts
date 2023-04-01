import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  private errorHandler(error: HttpErrorResponse): any {
    if(error.status === 401) {
      return throwError({
        message: 'No Autorizado',
        exception: 'Auth Error',
        status: 401
      });
    } else {
      return throwError({
        message: 'Error Comun',
        exception: 'Http Error',
        status: 400
      });
    }
  }

  get(url: string): Observable<any> {
    const headers = new HttpHeaders({
      'authorization': this.authService.getToken()
    });
    return this.httpClient.get(url, { headers }).pipe(
      catchError(this.errorHandler)
    );
  }
}
