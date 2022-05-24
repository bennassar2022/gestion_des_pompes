import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Repere} from '../Models/repere';
import {Pompe} from '../Models/pompe';

@Injectable({
  providedIn: 'root'
})
export class PompesService {

  constructor(private http: HttpClient) {

  }
  getAllPompes(): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/pompe/all`);
  }
  delete(model: Pompe): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/pompe/delete/` + model.id);
  }
  add(model): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/pompe/add`, model);
  }
}
