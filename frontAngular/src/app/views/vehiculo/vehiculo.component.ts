import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehiculo} from 'src/app/models/vehiculo.interface';
import { VehiculoService} from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  tipoVehiculo:any;
  conductores:any;
  conductorId:any;

  VehiculoForm = new 
  FormGroup({
    num_placa: new FormControl('', Validators.required),
    modelo: new FormControl('', Validators.required),
    marca:new FormControl('', Validators.required),
    color:new FormControl('', Validators.required),
    num_matricula:new FormControl('', Validators.required),
    foto_vehiculo:new FormControl('', Validators.required),
    conductor_id: new FormControl(localStorage.getItem('conductor_id')),
    tipo_vehiculo_id: new FormControl('', Validators.required)
  })
  
  constructor(private api:VehiculoService, private router:Router) { }

  ngOnInit(): void {
    this.api.getTipoVehiculo().subscribe(res=>{
      this.tipoVehiculo=res});

      this.api.getAllConductor().subscribe(data=>{
        this.conductores=data;
        //console.log(this.conductores);
        for (let iterator of this.conductores) {
          if(localStorage.getItem('user_id')===iterator.user_id){
            // this.conductorId=iterator.id;
            // console.log(iterator);
            // console.log(iterator.id);
            // localStorage.setItem("conductor_id",iterator.id);
          }
        }
      })

      
  }

  guardarVehiculo(form:Vehiculo){
    this.api.crearVehiculo(form).subscribe(data =>{
      this.router.navigate(['login'])
      console.log(data);
    })
  }

}
