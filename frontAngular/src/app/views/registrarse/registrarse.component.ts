import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { Registrarse } from '../../models/registrarse.interface';
import {Response} from '../../models/response.interface';

import {LaravelApiService} from '../../services/api/laravel-api.service';

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

 constructor(private api:LaravelApiService, private router:Router) { }

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
     //colocar un mensaje
    console.log('ya existe usuario');
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
        console.log(dataResponse['error']['email'][0])
      }else{
        console.log(dataResponse);
      }
      
    })
   }
   
 }


}
