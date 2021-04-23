import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculos} from 'src/app/class/vehiculo';
import { VehiculoService} from 'src/app/services/vehiculo.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  
  public previsualizacion: string;
  public archivos: any = []
  tipoVehiculo:any;
  conductores:any;
  conductorId:any;
  vehiculos:Vehiculos[];
  vehiculo:any;

  constructor(private api:VehiculoService, private router:Router,private sanitizer: DomSanitizer, private toastr:ToastrService) { 
    this.vehiculo = new Vehiculos()
  }


  ngOnInit(): void {
    this.api.getTipoVehiculo().subscribe(res=>{
      this.tipoVehiculo=res});

      this.api.getAllConductor().subscribe(data=>{
        this.conductores=data;
        //console.log(this.conductores);
        for (let iterator of this.conductores) {
          if(localStorage.getItem('user_id') == iterator.user_id){
            this.vehiculo.conductor_id=iterator.id;
          }
        }
      })   
  }

  guardarVehiculo(){
    const data=new FormData();
    data.append('archivo',this.vehiculo.foto_vehiculo);
    data.append('vehiculo', JSON.stringify(this.vehiculo));
    this.api.crearVehiculo(data).subscribe(res=>{
      this.router.navigate(['login'])
           console.log(res)
           console.log(res['msg']['summary']);
           console.log(res['msg']['detail']);
    },
    err => {
      this.toastr.warning('Intentalo más tarde', 'Servidor', {
        positionClass: 'toast-bottom-left'
      })
    })
  }

  //imagen
  capturarFile(event): void{
    const archivoCapturado = event.target.files[0];
    this.vehiculo.foto_vehiculo=archivoCapturado;
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