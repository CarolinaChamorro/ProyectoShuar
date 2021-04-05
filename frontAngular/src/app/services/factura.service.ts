import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../class/factura';
@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  ApiService() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/factura')
  }
  addData(data: Factura) {
    return this.httpClient.post('http://127.0.0.1:8000/api/factura/create', data)
  }
  deleteData(id: string) {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/factura/${id}`)

  }
}
