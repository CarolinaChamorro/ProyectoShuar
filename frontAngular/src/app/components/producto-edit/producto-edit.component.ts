import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../../services/producto.service';
import { Producto } from './../../class/producto';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {
  id:any;
  data:any;
  producto = new Producto();

  public previsualizacion: string;
  public archivos: any = []

  constructor(private route:ActivatedRoute ,private dataService:ProductoService,
    private toastr:ToastrService, private sanitizer: DomSanitizer) { }
    

ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
   this.getData(); 
   console.log(this.id);
  }
getData(){
    this.dataService.getProductoById(this.id).subscribe(res=>{
    this.data=res;
    this.producto=this.data;
  })}
  
updateProducto(){
  const data=new FormData();
    data.append('archivo',this.producto.foto);
    data.append('producto', JSON.stringify(this.producto));
    this.dataService.updateProductoData(this.producto.id, data).subscribe(res=>{ 
      this.toastr.success('Se ha actualizado el producto', 'Producto', {
            positionClass: 'toast-top-right'
          })
    },
    err => {
      this.toastr.warning('Intentalo más tarde', 'Producto error', {
        positionClass: 'toast-bottom-left'
      })
    })
  }
//imagen
capturarFile(event): void{
  const archivoCapturado = event.target.files[0];
  this.producto.foto=archivoCapturado;
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