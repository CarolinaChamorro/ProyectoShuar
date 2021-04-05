import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import { Cliente } from '../models/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  _Api= environment.urlAPI;

  constructor( private httpClient:HttpClient) { }

  crearCliente(form:Cliente):Observable<Cliente>{
    let url = `${this._Api}/cliente/create`
    return this.httpClient.post<Cliente>(url, form)
  }

  getClienteById(id: string) {
    return this.httpClient.get(`${this._Api}/cliente/${id}`)
  } 

  updateCliente(id: string, data: Cliente) {
    return this.httpClient.put(`${this._Api}/cliente/${id}`, data);
  }

  getAllUsers(): Observable<any>{
    return this.httpClient.get(`${this._Api}/users`);
  }

  getAllCliente(): Observable<any>{
    return this.httpClient.get(`${this._Api}/cliente`);
  }

}
