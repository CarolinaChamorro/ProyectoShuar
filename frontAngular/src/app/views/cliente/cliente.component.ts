import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente} from 'src/app/models/cliente.interface';
import { ClienteService} from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  
  
  ClienteForm = new 
  FormGroup({
    cedula: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    direccion:new FormControl('', Validators.required),
    numero_casa:new FormControl('', Validators.required),
    rol : new FormControl('cliente'),
    user_id: new FormControl(localStorage.getItem('user_id'))
  })
  
  constructor(private api:ClienteService, private router:Router) { }

  ngOnInit(): void {
    
  }

  guardarCliente(form:Cliente){
    this.api.crearCliente(form).subscribe(data =>{
      let dataCliente:Cliente=data;
      localStorage.setItem("cliente_id",dataCliente['data']['id'])
      this.router.navigate(['login'])
      console.log(data);
    })
  }

}
