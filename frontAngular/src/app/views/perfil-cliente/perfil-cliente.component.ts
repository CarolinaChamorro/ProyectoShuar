import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {

  constructor(private api:ClienteService) { }

  clientes:any;
  users:any;
  userData:any;
  clienteData:any; 

  ngOnInit(): void {
    this.api.getAllUsers().subscribe(res=>{
      this.users=res;
      this.userData=localStorage.getItem('user_id');
    });

    this.api.getAllCliente().subscribe(res=>{
      this.clientes=res;
      this.clienteData=localStorage.getItem('cliente_id');
    })

  }

}
