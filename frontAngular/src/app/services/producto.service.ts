import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Producto } from '../class/producto';
import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  _Api= environment.urlAPI;
  ApiService() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/producto')
  }
  getProductoById(id: string) {
    return this.httpClient.get(`http://127.0.0.1:8000/api/producto/${id}`)
  } 
  addData(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/producto/create', data)
  }
  deleteData(id: string) {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/producto/${id}`)

  }
  updateProductoData(id: string, data: any) {
    return this.httpClient.post(`http://127.0.0.1:8000/api/producto/${id}`, data);
  }
  getAllAsociados(): Observable<any>{
    return this.httpClient.get(`${this._Api}/asociado`);
  }

  getAllUsers(): Observable<any>{
    return this.httpClient.get(`${this._Api}/users`);
  }
}