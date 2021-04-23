import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import { Cliente } from '../models/cliente.interface';
import { DetallePedido } from '../models/detallePedido.interface';
import { VerPedido } from '../models/verpedido.interface';
import { Clientes } from './../class/cliente';

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
  
  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/cliente');
  }
  addData(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/cliente/create', data)
  }
  deleteData(id: string) {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/cliente/${id}`)
  }
  getClienteById(id: string) {
    return this.httpClient.get(`http://127.0.0.1:8000/api/cliente/${id}`)
  }
  updateClienteData(id: string, data: Clientes) {
    return this.httpClient.put(`http://127.0.0.1:8000/api/cliente/${id}`, data);
  }

  getAllUsers(): Observable<any>{
    return this.httpClient.get(`${this._Api}/users`);
  }

  getAllCliente(): Observable<any>{
    return this.httpClient.get(`${this._Api}/cliente`);
  }
  getAllAsociados(): Observable<any>{
    return this.httpClient.get(`${this._Api}/asociado`);
  }
  getAllProductos(): Observable<any>{
    return this.httpClient.get(`${this._Api}/producto`);
  }
  //TraerCliente
  perfilCliente(id:any):Observable<any>{
    let url ="http://127.0.0.1:8000/api/cliente/perfil/"+id;
    return this.httpClient.get<any>(url);
  }
  

  //detalle factura
  allDetalles():Observable<any>{
    return this.httpClient.get(`${this._Api}/detalle/factura`);
  }

  addDetalle(detalle:any):Observable<any>{
    return this.httpClient.post(`${this._Api}/detalle/factura/create`,detalle);
  }

  deleteDetalle(id:string):Observable<any>{
    return this.httpClient.delete(`${this._Api}/detalle/factura/${id}`);
  }

  updateDetalles(id:any, data:any):Observable<any>{
    let url = "http://127.0.0.1:8000/api/detalle/factura/"+id;
    return this.httpClient.put<any>(url, data);
  }

  detallesPedido(id:any):Observable<DetallePedido[]>{
    let url ="http://127.0.0.1:8000/api/detalle/pedido/"+id;
    return this.httpClient.get<DetallePedido[]>(url)
  }

  detallesPedidoAsociado(id:any):Observable<VerPedido[]>{
    let url ="http://127.0.0.1:8000/api/detalle/pedido/"+id;
    return this.httpClient.get<VerPedido[]>(url)
  }

  //Rol para traer asociados- Pendiente
  getPedidosUsers():Observable<any>{
    let url = "http://127.0.0.1:8000/api/rol";
    return this.httpClient.get<any>(url);
  }


}
