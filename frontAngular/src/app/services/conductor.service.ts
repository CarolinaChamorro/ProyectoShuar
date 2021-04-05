import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import { Conductor } from '../models/conductor.interface';
@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  _Api= environment.urlAPI;

  constructor( private httpClient:HttpClient) { }

  crearConductor(form:Conductor):Observable<Conductor>{
    let url = `${this._Api}/conductor/create`
    return this.httpClient.post<Conductor>(url, form)
  }

  getConductorById(id: string) {
    return this.httpClient.get(`${this._Api}/conductor/${id}`)
  } 

  updateConductor(id: string, data: Conductor) {
    return this.httpClient.put(`${this._Api}/conductor/${id}`, data);
  }

  getAllConductor(): Observable<any>{
    return this.httpClient.get(`${this._Api}/conductor`);
  }
  getAllUsers(): Observable<any>{
    return this.httpClient.get(`${this._Api}/users`);
  }
  getAllVehiculos(): Observable<any>{
    return this.httpClient.get(`${this._Api}/vehiculo`);
  }
  
}
