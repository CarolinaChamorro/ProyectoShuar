import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private api:ClienteService,private toastr:ToastrService,private router: Router) { }
  
  productos:any;
  detalles: any;
  clientes:any;
  clienteData:any;
  lista:any=[];
  clienteSinProducto:any=[];
 
  ngOnInit(): void {
    this.api.getAllCliente().subscribe(res=>{
      this.clientes=res;
      this.clienteData=localStorage.getItem('cliente_id');
    });
    this.api.getAllProductos().subscribe(res=>{
      this.productos=res;
    });
    this.api.allDetalles().subscribe(res=>{
      this.detalles=res;
      for (const iteratorDet of this.detalles) {
        if(iteratorDet.cliente_id == localStorage.getItem('cliente_id')  && iteratorDet.estado == 'Agregado'){
          this.lista.push(iteratorDet);
        }
      }
    },
    err => {
      this.toastr.warning('Intentalo más tarde', 'SERVIDOR', {
        positionClass: 'toast-bottom-left'
      })
    })
    this.traerDetalle();
  
  }
  pedidos={
    estado:'',
    cliente_id:localStorage.getItem("cliente_id"),
    producto_id:0,
    cantidad:0

  };

traerDetalle(){
  this.api.allDetalles().subscribe(res=>{
    this.detalles=res;
    for (const iteratorDet of this.detalles) {
      if(iteratorDet.cliente_id==localStorage.getItem('cliente_id') && iteratorDet.estado == 'Agregado'){
        this.lista.push(iteratorDet);
      }
    }
  },
  err => {
    this.toastr.warning('Intentalo más tarde', 'SERVIDOR', {
      positionClass: 'toast-bottom-left'
    })
  })
}
  eliminarDetalle(id:string){
    this.api.deleteDetalle(id).subscribe(res=>{
      this.toastr.error('Eliminado exitosamente', 'Carrito', {
        positionClass: 'toast-top-right'
      })
      this.traerDetalle();
      this.ngOnInit();
    },
      err => {
        this.toastr.warning('Intentalo más tarde', 'Carrito Error', {
          positionClass: 'toast-bottom-left'
        })
      })
  }



}
