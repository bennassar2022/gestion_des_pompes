import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {_catch} from '../../../../node_modules/rxjs-compat/operator/catch';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../model/user.model';
import {Pompe} from "../../home/Models/pompe";


@Injectable()
export class AuthService {

    private url: string;
    constructor(private httpClient: HttpClient) {
      this.url = environment.apiBaseUrl;
    }

    login(model): Observable<any> {
        return this.httpClient.post(`${this.url}/user/login`, model);

    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('@pmp:user:token');
        localStorage.removeItem('@pmp:user:data');
    }
  register(data): Observable<any> {
    return this.httpClient.post(`${this.url}/user/register`, data);

  }
  getAllUsers(){
    return this.httpClient.get(`${this.url}/user/list`);
  }
  activate(model): Observable<any> {
    return this.httpClient.post(`${this.url}/user/activate-user` , model);
  }
  desactivate(model): Observable<any> {
    return this.httpClient.post(`${this.url}/user/desactivate-user` , model);
  }
  delete(model): Observable<any> {
    return this.httpClient.post(`${environment.apiBaseUrl}/user/delete`, model);
  }
}
