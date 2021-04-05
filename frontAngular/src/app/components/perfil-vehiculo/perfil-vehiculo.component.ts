import { Component, OnInit } from '@angular/core';
import { Vehiculos } from '../../class/vehiculo';
import { VehiculoService } from '../../services/vehiculo.service';
import { Driver } from '../../class/conductor';
import { TipoVehiculo } from '../../class/tipo-vehiculo';

@Component({
  selector: 'app-perfil-vehiculo',
  templateUrl: './perfil-vehiculo.component.html',
  styleUrls: ['./perfil-vehiculo.component.css']
})
export class PerfilVehiculoComponent implements OnInit {

  vehiculo:any;
  vehiculos= new Vehiculos();
  conductor:any;
  conductors= new Driver();
  tipo:any;
  tipos=new TipoVehiculo();
  constructor(private dataService:VehiculoService) { }

  ngOnInit(): void {
    this.getVehiculoData()
    this.dataService.getConductor().subscribe(res=>{
      this.conductor=res});
      this.dataService.getTipo().subscribe(res=>{
        this.tipo=res});
  }
  getVehiculoData(){
    this.dataService.getData().subscribe(res=>{
     this.vehiculo=res});
  }
  addData(){
    this.dataService.addData(this.vehiculos).subscribe(res=>{ 
      this.getVehiculoData();
    }) 
  }
  deleteData(id:string){
    this.dataService.deleteData(id).subscribe(res=>{
    this.getVehiculoData();
    console.log(res) ;
    })
    this.getVehiculoData();
   }

}
