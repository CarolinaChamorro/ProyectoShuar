import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-catalogo-cliente',
  templateUrl: './catalogo-cliente.component.html',
  styleUrls: ['./catalogo-cliente.component.css']
})
export class CatalogoClienteComponent implements OnInit {

  constructor(private api:ClienteService,private toastr:ToastrService,private router: Router) { }
  users:any;
  usuarioData:any;
  asociados:any;
  productos:any;
  productoData:any;
  asociadoId:any;
  clientes:any;
  nombrEmpresa:any;
  clienteData:any;
  asociadoSinProductos:boolean=false;
  sinProductos:any;
 
  ngOnInit(): void {
    this.api.getAllCliente().subscribe(res=>{
      this.clientes=res;
      this.clienteData=localStorage.getItem('cliente_id');
    });
    this.api.getAllAsociados().subscribe(res=>{
      this.asociados=res;
    });
    this.api.getAllProductos().subscribe(res=>{
      this.productos=res;
    });
    this.api.getAllUsers().subscribe(res=>{
      this.users=res;
      this.usuarioData=localStorage.getItem('user_id');
    });
    
  }

  clickeado:boolean=false;
  mostrar:string='';
  
  pedidos={
    estado:'',
    cliente_id:localStorage.getItem("cliente_id"),
    producto_id:0,
    cantidad:0

  };

  lista:any=[];
  cantidad:any=[];
  textoDeInput: number = 1;
   


  carrito(valor:number,unidad:number){    
   this.pedidos={
    producto_id:valor,
    cantidad:unidad,
    cliente_id:localStorage.getItem("cliente_id"),
    estado:'Agregado'
   };
   this.cantidad.push(this.pedidos);
  console.log(this.cantidad)
   this.toastr.success('Añadir al carrito de compras', 'Producto', {
    positionClass: 'toast-top-right'
  })
  console.log('Lista de productos'+this.lista)
  }

  
  asociado(id:number){
    this.nombrEmpresa=id;
   for (const iteratorPro of this.productos) {
     if(iteratorPro.asociado_id===id){
       this.asociadoSinProductos=false;
      this.asociadoId=iteratorPro.asociado_id;
      this.productoData=iteratorPro;
      console.log(this.productoData);
     }
      else if(iteratorPro.asociado_id != id){
       this.asociadoSinProductos=true;
       this.sinProductos=id;
       console.log(id);
     }
   }
  }


  PostearPedido(){
    if(this.cantidad.length===0){
      this.toastr.error('No hay productos en el carrito', 'Producto', {
        positionClass: 'toast-bottom-left'
      })
    }else{
      for (let index = 0; index < this.cantidad.length; index++) {
        const element = this.cantidad[index];
        const list:any={
          producto_id:element.producto_id,
          cantidad:element.cantidad,
          cliente_id:element.cliente_id,
          estado:element.estado
        }
        
        //console.log(element)
        console.log(list)
        this.api.addDetalle(list).subscribe((res)=>{
          console.log(res)
        } ,
        err => {
        this.toastr.warning('Intentalo más tarde', 'SERVIDOR', {
          positionClass: 'toast-bottom-left'
        })
        this.router.navigate(['carrito'])
      })}
      
    }
    }


}
