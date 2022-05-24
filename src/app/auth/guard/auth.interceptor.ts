import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('@pmp:user:token');

   if (token)
      req = req.clone({
        setHeaders: {
          'Authorization': "Token " +`${token}`
        },
      });
     // req.headers.set( 'Authorization', "Token " +`${token}`);
    return next.handle(req);
  }
}
