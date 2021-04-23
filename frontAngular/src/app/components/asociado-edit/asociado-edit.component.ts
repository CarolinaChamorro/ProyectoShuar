import { Component, OnInit } from '@angular/core';
import { AsociadoPerfil } from '../../class/asociado';
import { AsociadoService } from '../../services/asociado.service';
import {ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asociado-edit',
  templateUrl: './asociado-edit.component.html',
  styleUrls: ['./asociado-edit.component.css']
})
export class AsociadoEditComponent implements OnInit {
  id:any;
  asociado:any;
  data:any;
  asociados=new AsociadoPerfil();
  public previsualizacion: string;
  public archivos: any = []

  constructor(private route:ActivatedRoute ,private dataService:AsociadoService,private sanitizer: DomSanitizer, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
   this.getData(); 
   console.log(this.id);
  }
  getData(){
    this.dataService.getAsociadoById(this.id).subscribe(res=>{
    this.data=res['data'];
    this.asociados=this.data;
  })}
  updateAsociado(){
    const data=new FormData();
    data.append('archivo',this.asociados.foto_asociado);
    data.append('asociado', JSON.stringify(this.asociados));
    this.dataService.updateAsociado(this.asociados.id, data).subscribe(res =>{
      this.toastr.success('Se ha actualizado el perfil', 'Asociado', {
            positionClass: 'toast-top-right'
          })
      
   }, err => {
        this.toastr.warning('Intentalo más tarde', 'Servidor', {
          positionClass: 'toast-bottom-left'
        })
      })

   }


//imagen
capturarFile(event): void{
  const archivoCapturado = event.target.files[0];
  this.asociados.foto_asociado=archivoCapturado;
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