import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Repere} from '../Models/repere';

@Injectable({
  providedIn: 'root'
})
export class ReperesService {

  constructor(private http: HttpClient) {

  }
  getAllReperes(): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/repere/all`);
  }
  delete(model: Repere): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/repere/delete/` + model.id);
  }
  add(model): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/repere/add`, model);
  }
}
