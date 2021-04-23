import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { Registrarse } from '../../models/registrarse.interface';
import {Response} from '../../models/response.interface';

import {LaravelApiService} from '../../services/api/laravel-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

 //Recuperar los datos del formulario
 registroFrom = new 
 FormGroup({
   name : new FormControl('', Validators.required),
   email : new FormControl('', Validators.required),
   password : new FormControl('', Validators.required)
 })

 constructor(private api:LaravelApiService, private router:Router, private toastr:ToastrService) { }

 users={
   id:'',
   name:'',
   email:'',
 }
 clickeado:boolean=false;

 ngOnInit(): void {
   this.checkLocalStorage();
   this.api.getAllUsers().subscribe(res=>{
    this.users=res
    console.log(this.users);
   })
 }

 //revisar el token guardado
 checkLocalStorage(){
   if(localStorage.getItem('token')) {
     // code...
     this.router.navigate([''])
   }
 }

 errorStatus:boolean = false;
 
 registrarse(form:Registrarse){
   if(localStorage.getItem('user_id') != this.users.id){
     
    err => {
      this.toastr.warning('Intentalo más tarde', 'Producto error', {
        positionClass: 'toast-bottom-left'
      })
    }
   }else{
    this.api.registerUser(form).subscribe(data => {
      let dataResponse:Response = data;
      if(dataResponse.status == "success"){
        localStorage.setItem("token", dataResponse.data.token);
        localStorage.setItem("user_id", dataResponse.data.id);
        //this.router.navigate(['perfil'])
      }else{
        
        this.errorStatus=true;
      }
       if(dataResponse['error']['email'][0] != ''){
         //colocar un mensaje
        console.log(dataResponse['error']['email'][0]);
        
    err => {
      this.toastr.warning('Verifica tu email', 'Email', {
        positionClass: 'toast-bottom-left'
      })
    }
      }else{
        console.log(dataResponse);
      }
      
    })
   }
   
 }


}
