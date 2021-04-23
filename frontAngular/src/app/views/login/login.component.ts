import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

import {LaravelApiService} from '../../services/api/laravel-api.service';
import {Router} from '@angular/router'
import { Login } from '../../models/login.interface';
import { Response} from '../../models/response.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //este método guarda el valor de los campos del formulario
  loginForm = new 
  FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor(private api:LaravelApiService, private router:Router, private toastr:ToastrService) { }

  errorStatus:boolean = false
   users:any;
   asociados:any;
   conductores:any;
   clientes:any;

   input:string='';
   
  ngOnInit(): void {
    this.checkLocalStorage();
    //users
    this.api.getAllUsers().subscribe(res=>{
      this.users=res;
    });

    //asociados
    this.api.getAllAsociados().subscribe(res=>{
      this.asociados=res;
    })

    //clientes
    this.api.getAllClientes().subscribe(res=>{
      this.clientes=res;
    })
    //conductores
    this.api.getAllConductores().subscribe(res=>{
      this.conductores=res;
    })
    
  }


user={
  key:localStorage.getItem('user_id')
}
  //revisar token
  checkLocalStorage(){
    if(localStorage.getItem('token')) {
      // code...
      console.log(this.user.key)
    }
  }
  

  //logaut de la app
  onLogaut(){
    localStorage.removeItem("user_id")
    localStorage.removeItem("token");
    localStorage.removeItem("conductor_id");
    localStorage.removeItem("asociado_id");
    localStorage.removeItem("cliente_id");
  }

  //Este método recibe los valores del formulario mediante el método ngSubmit
  onLogin(form:Login){
    
    this.api.loginByEmail(form).subscribe(data => {
      let dataResponse:Response = data;
      if(dataResponse.status == "success"){
        localStorage.setItem("token", dataResponse.data.token);
        localStorage.setItem("user_id", dataResponse.data.id);
        for (const usuario of this.users) {
           for (const iteratorA of this.asociados) {
            if (usuario.id===iteratorA.user_id && usuario.id===dataResponse.data.id) {
              localStorage.setItem("asociado_id", iteratorA.id);
              this.router.navigate(['catalogo/asociado']);
              console.log(iteratorA);
            }
              
           }
           for (const iteratorCon of this.conductores ) {
            if(usuario.id===iteratorCon.user_id && usuario.id===dataResponse.data.id){
              localStorage.setItem("conductor_id", iteratorCon.id);
              this.router.navigate(['perfil/conductor']);
              console.log(iteratorCon);
            }
          }

        for (const iteratorCli of this.clientes) {
          if(usuario.id===iteratorCli.user_id && usuario.id===dataResponse.data.id){
            localStorage.setItem("cliente_id", iteratorCli.id);
            this.router.navigate(['catalogo/cliente']);
           console.log(iteratorCli);
         }
       }
        }

      }else{
        this.errorStatus=true;
        
    err => {
      this.toastr.warning('Intentalo más tarde', 'Producto error', {
        positionClass: 'toast-bottom-left'
      })
    }
      }
      console.log(data);
    });
    
  }

}


// if( usuario.email=="lcb.chamorro@yavirac.edu.ec" || dataResponse.data.id=='13'){
//   this.router.navigate(['productos']);
//   console.log(dataResponse.data.id)
//  }else{
//    this.router.navigate(['detalle']);
//  }