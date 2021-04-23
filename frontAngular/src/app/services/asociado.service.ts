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

  crearAsociado(data: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/asociado/create', data);
  }

  getAsociadoById(id: string) {
    return this.httpClient.get(`${this._Api}/asociado/${id}`)
  } 

  updateAsociado(id: string, data: any) {
    return this.httpClient.post(`${this._Api}/asociado/${id}`, data);
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

  getAllProducto(): Observable<any>{
    return this.httpClient.get(`${this._Api}/producto`);
  }
  

}
