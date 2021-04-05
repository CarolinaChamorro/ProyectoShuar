import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../../services/conductor.service';

@Component({
  selector: 'app-perfil-conductor',
  templateUrl: './perfil-conductor.component.html',
  styleUrls: ['./perfil-conductor.component.css']
})
export class PerfilConductorComponent implements OnInit {

  constructor(private api:ConductorService) { }

  users:any;
  userData:any;
  conductores:any;
  conductorData:any;
  vehiculos:any;


  ngOnInit(): void {

    this.api.getAllUsers().subscribe(res=>{
      this.users=res;
      this.userData=localStorage.getItem('user_id');
    });

    this.api.getAllConductor().subscribe(res=>{
      this.conductores=res;
      this.conductorData=localStorage.getItem('conductor_id');
    });

    this.api.getAllVehiculos().subscribe(res=>{
      this.vehiculos=res;
    })

  }

}
