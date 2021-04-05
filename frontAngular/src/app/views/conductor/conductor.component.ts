import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Conductor} from 'src/app/models/conductor.interface';
import { ConductorService} from 'src/app/services/conductor.service';
import { Driver } from '../../class/conductor';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {
  
  ConductorForm = new 
  FormGroup({
    cedula: new FormControl('', Validators.required),
    tipo_licencia:new FormControl('', Validators.required),
    rol : new FormControl('conductor'),
    user_id: new FormControl(localStorage.getItem('user_id'))
  })
  
  constructor(private api:ConductorService, private router:Router) { }

  ngOnInit(): void {
    
  }

  guardarConductor(form:Conductor){
    this.api.crearConductor(form).subscribe(data =>{
      let dataConductor:Driver=data;
      localStorage.setItem("conductor_id",dataConductor['data']['id'])
      this.router.navigate(['vehiculo'])
      console.log(dataConductor['data']['id']);
    })
  }

}
