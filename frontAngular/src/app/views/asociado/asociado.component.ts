import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Asociado} from 'src/app/models/asociado.interface';
import { AsociadoService} from 'src/app/services/asociado.service';


@Component({
  selector: 'app-asociado',
  templateUrl: './asociado.component.html',
  styleUrls: ['./asociado.component.css']
})
export class AsociadoComponent implements OnInit {
  
  servicio:any;
  
  AsociadoForm = new 
  FormGroup({
    num_identificacion: new FormControl('', Validators.required),
    nombre_empresa: new FormControl('', Validators.required),
    actividad_comercial:new FormControl('', Validators.required),
    direccion:new FormControl('', Validators.required),
    foto_asociado:new FormControl('', Validators.required),
    zona:new FormControl('', Validators.required),
    rol : new FormControl('asociado'),
    user_id: new FormControl(localStorage.getItem('user_id')),
    servicio_id: new FormControl('', Validators.required)
  })
  
  constructor(private api:AsociadoService, private router:Router) { }

  ngOnInit(): void {
    this.api.getServicios().subscribe(res=>{
      this.servicio=res});
  }

  guardarAsociado(form:Asociado){
    this.api.crearAsociado(form).subscribe(data =>{
      let dataAsociado:Asociado=data;
      localStorage.setItem("asociado_id", dataAsociado['data']['id'])
      this.router.navigate(['login'])
      console.log(data);
    })
  }


}
