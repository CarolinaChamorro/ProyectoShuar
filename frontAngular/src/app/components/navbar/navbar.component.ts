import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { LaravelApiService } from '../../services/api/laravel-api.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router, private api:LaravelApiService) { }
 
  users:any;
  asociados:any;
  clientes:any;
  conductores:any;
  usuarioId:any;
  asociadoId:any;
  clienteId:any;
  conductorId:any;

  ngOnInit(): void {
    this.api.getAllUsers().subscribe(res=>{
     this.users=res;
     this.usuarioId=localStorage.getItem('user_id');
    });

    this.api.getAllAsociados().subscribe(res=>{
      this.asociados=res;
      this.asociadoId=localStorage.getItem('asociado_id');
    });

    this.api.getAllClientes().subscribe(res=>{
      this.clientes=res;
      this.clienteId=localStorage.getItem('cliente_id');
    });

    this.api.getAllConductores().subscribe(res=>{
      this.conductores=res;
      this.conductorId=localStorage.getItem('conductor_id');
    });

  }
  Factura() {
    this._router.navigate(['factura']);

  }
  Vehiculo() {
    this._router.navigate(['perfil/vehiculo']);

  }
  Producto() {
    this._router.navigate(['producto']);

  }
  //salir de sesión
  onLogaut(){
    localStorage.removeItem("user_id")
    localStorage.removeItem("token");
    localStorage.removeItem("conductor_id");
    localStorage.removeItem("asociado_id");
    localStorage.removeItem("cliente_id");
    this._router.navigate(['home'])
    this.ngOnInit();
  }

  

}
