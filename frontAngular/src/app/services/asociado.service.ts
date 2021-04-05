import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import { Asociado } from '../models/asociado.interface';

@Injectable({
  providedIn: 'root'
})
export class AsociadoService {
  _Api= environment.urlAPI;

  constructor( private httpClient:HttpClient) { }

crearAsociado(form:Asociado):Observable<Asociado>{
    let url = `${this._Api}/asociado/create`
    return this.httpClient.post<Asociado>(url, form)
  }

  getAsociadoById(id: string) {
    return this.httpClient.get(`${this._Api}/asociado/${id}`)
  } 

  updateAsociado(id: string, data: Asociado) {
    return this.httpClient.put(`${this._Api}/asociado/${id}`, data);
  }

  getServicios(): Observable<any>{
    return this.httpClient.get(`${this._Api}/servicio`);
  }

  getAllAsociados(): Observable<any>{
    return this.httpClient.get(`${this._Api}/asociado`);
  }

  getAllUsers(): Observable<any>{
    return this.httpClient.get(`${this._Api}/users`);
  }
  

}
