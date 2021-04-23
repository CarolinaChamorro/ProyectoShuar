import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsociadoService} from 'src/app/services/asociado.service';
import {AsociadoPerfil} from '../../class/asociado'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-asociado',
  templateUrl: './asociado.component.html',
  styleUrls: ['./asociado.component.css']
})
export class AsociadoComponent implements OnInit {
  asociado:any;
  asociados:AsociadoPerfil[];
  servicio:any;
  public previsualizacion: string;
  public archivos: any = []

constructor(private api:AsociadoService, private router:Router,private sanitizer: DomSanitizer) {
  this.asociado= new AsociadoPerfil();
 }

ngOnInit(): void {
  this.asociado.user_id=localStorage.getItem('user_id');
  this.asociado.rol='asociado';
  this.api.getServicios().subscribe(res=>{
    this.servicio=res});
  
}

guardarAsociado(){
  const data=new FormData();
    data.append('archivo',this.asociado.foto_asociado);
    data.append('asociado', JSON.stringify(this.asociado));
    this.api.crearAsociado(data).subscribe(res =>{
    localStorage.setItem("asociado_id", res['data']['id'])
    this.router.navigate(['login'])
    console.log(res['msg']['summary']);
    console.log(res['msg']['detail']);
    
  })
}
//imagen
capturarFile(event): void{
  const archivoCapturado = event.target.files[0];
  this.asociado.foto_asociado=archivoCapturado;
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