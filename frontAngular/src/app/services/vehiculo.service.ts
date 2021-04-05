import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import { Vehiculo } from '../models/vehiculo.interface';
import { Vehiculos } from '../class/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  _Api= environment.urlAPI;
  URL1 = "http://127.0.0.1:8000/api/conductor";
  URL2 = "http://127.0.0.1:8000/api/tipo/vehiculo";

  constructor( private httpClient:HttpClient) { }
 
  crearVehiculo(form:Vehiculo):Observable<Vehiculo>{
    let url = `${this._Api}/vehiculo/create`
    return this.httpClient.post<Vehiculo>(url, form)
  }

  getTipoVehiculo(): Observable<any>{
    return this.httpClient.get(`${this._Api}/tipo/vehiculo`);
  }

  getAllConductor():Observable<any>{
    return this.httpClient.get(`${this._Api}/conductor`);
  }

  //vehiculos
  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/vehiculo')
  }
  getVehiculoById(id: string) {
    return this.httpClient.get(`http://127.0.0.1:8000/api/vehiculo/${id}`)
  } 
  addData(data: Vehiculos) {
    return this.httpClient.post('http://127.0.0.1:8000/api/vehiculo/create', data)
  }
  deleteData(id: string) {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/vehiculo/${id}`)

  }
  updateVehiculoData(id: string, data: Vehiculos) {
    return this.httpClient.put(`http://127.0.0.1:8000/api/vehiculo/${id}`, data);
  }
  getConductor(){
    return this.httpClient.get(this.URL1)
  }
  getTipo(){
    return this.httpClient.get(this.URL2)
  }


}
