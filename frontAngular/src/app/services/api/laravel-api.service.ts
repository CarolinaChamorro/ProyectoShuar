import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import {Observable} from 'rxjs';
import { Login } from '../../models/login.interface';
import { Response} from '../../models/response.interface';
import { Registrarse } from '../../models/registrarse.interface';
// import { Perfil } from '../../models/perfil';


@Injectable({
  providedIn: 'root'
})

export class LaravelApiService {

  _Api= environment.urlAPI;

  constructor( private http:HttpClient) { }

  loginByEmail(form:Login):Observable<Response>{
    let url = "http://127.0.0.1:8000/api/login"
    return this.http.post<Response>(url, form)
  }

  registerUser(form:Registrarse):Observable<Response>{
    let url = "http://127.0.0.1:8000/api/register"
    return this.http.post<Response>(url,form)
  }
  
    //Get all users and rols
  getAllUsers():Observable<any>{
    return this.http.get(`${this._Api}/users`);
  }
  
  getAllAsociados():Observable<any>{
    return this.http.get(`${this._Api}/asociado`);
  }
  getAllConductores():Observable<any>{
    return this.http.get(`${this._Api}/conductor`);
  }

  getAllClientes():Observable<any>{
    return this.http.get(`${this._Api}/cliente`);
  }

  //get by one user and rols
  getUserById(id: string) {
    return this.http.get(`${this._Api}/users/${id}`)
  } 
  getAsociadoById(id: string) {
    return this.http.get(`${this._Api}/asociado/${id}`)
  } 
  getClienteById(id: string) {
    return this.http.get(`${this._Api}/cliente/mostrar/${id}`)
  } 
  getConductorById(id: string) {
    return this.http.get(`${this._Api}/conductor/${id}`)
  } 

}
