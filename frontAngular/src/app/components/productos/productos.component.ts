import { Component, OnInit } from '@angular/core';
import { Producto } from '../../class/producto';
import { ProductoService } from '../../services/producto.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-producto',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  producto:any;
  productos:Producto[];
  asociadoData:any;
  public previsualizacion: string;
  public archivos: any = []
  constructor(private dataService:ProductoService,private sanitizer: DomSanitizer, private toastr:ToastrService) { 
    this.producto= new Producto();
  }

  ngOnInit(): void {
    this.getProductoData()
    this.producto.asociado_id=localStorage.getItem('asociado_id');
    this.asociadoData=localStorage.getItem('asociado_id')
  }
  getProductoData(){
    this.dataService.getData().subscribe(res=>{
     this.productos=res as Producto[]});
  }
  addData(){
    const data=new FormData();
    data.append('archivo',this.producto.foto);
    data.append('producto', JSON.stringify(this.producto));
    this.dataService.addData(data).subscribe(res=>{ 
      this.getProductoData();
      this.toastr.success('Se ha creado un producto', 'Producto', {
        positionClass: 'toast-top-right'
      })
      console.log(res['msg']['summary']);
      console.log(res['msg']['detail']);
    },
    err => {
      this.toastr.warning('Intentalo más tarde', 'Servidor', {
        positionClass: 'toast-bottom-left'
      })
    }) 
  }
  deleteData(id:string){
    this.dataService.deleteData(id).subscribe(res=>{
    this.getProductoData();
    this.toastr.error('Eliminado exitosamente', 'Producto', {
      positionClass: 'toast-top-right'
    })
    console.log(res) ;
    },
    err => {
      this.toastr.warning('Intentalo más tarde', 'Servidor', {
        positionClass: 'toast-bottom-left'
      })
    })
    this.getProductoData();
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