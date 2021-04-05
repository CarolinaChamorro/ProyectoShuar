import { Component, OnInit } from '@angular/core';
import { Vehiculos } from '../../class/vehiculo';
import { VehiculoService } from '../../services/vehiculo.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-vehiculo-edit',
  templateUrl: './vehiculo-edit.component.html',
  styleUrls: ['./vehiculo-edit.component.css']
})
export class VehiculoEditComponent implements OnInit {
  id:any;
  data:any;
  vehiculos=new Vehiculos
  constructor(private route:ActivatedRoute ,private dataService:VehiculoService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
   this.getData(); 
   console.log(this.id);
  }
  getData(){
    this.dataService.getVehiculoById(this.id).subscribe(res=>{
    this.data=res;
    this.vehiculos=this.data;
  })}
  updateVehiculo(){
    this.dataService.updateVehiculoData(this.id,this.vehiculos).subscribe(resp=>{console.log(resp)})
   }
}