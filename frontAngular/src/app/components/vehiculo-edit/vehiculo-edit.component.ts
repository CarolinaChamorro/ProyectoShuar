import { Component, OnInit } from '@angular/core';
import { Vehiculos } from '../../class/vehiculo';
import { VehiculoService } from '../../services/vehiculo.service';
import {ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vehiculo-edit',
  templateUrl: './vehiculo-edit.component.html',
  styleUrls: ['./vehiculo-edit.component.css']
})
export class VehiculoEditComponent implements OnInit {
  id:any;
  data:any;
  vehiculos=new Vehiculos();

  public previsualizacion: string;
  public archivos: any = []

  constructor(private route:ActivatedRoute ,private dataService:VehiculoService, private toastr:ToastrService, private sanitizer: DomSanitizer) { }

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
    const data=new FormData();
    data.append('archivo',this.vehiculos.foto_vehiculo);
    data.append('vehiculo', JSON.stringify(this.vehiculos));
    this.dataService.updateVehiculoData(this.vehiculos.id,data).subscribe(resp=>{
      console.log(resp)
      this.toastr.success('Se ha actualizado los datos del vehículo', 'Vehículo', {
        positionClass: 'toast-top-right'
      })
    },err => {
      this.toastr.warning('Intentalo más tarde', 'Vehículo error', {
        positionClass: 'toast-bottom-left'
      })
    })
   }


   //imagen
capturarFile(event): void{
  const archivoCapturado = event.target.files[0];
  this.vehiculos.foto_vehiculo=archivoCapturado;
  this.extraerBase64(archivoCapturado).then((imagen:any) =>{
    this.previsualizacion = imagen.base;
    console.log(imagen);
  })
}
extraerBase64 = async ($event: any) => new Promise((resolve) => {
  try {
    const unsafeImg = window.URL.createObjectURL($event);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () => {
      resolve({
        base: reader.result
      });
    };
    reader.onerror = error => {
      resolve({
        base: null
      });
    };

  } catch (e) {
    return null;
  }
})

}