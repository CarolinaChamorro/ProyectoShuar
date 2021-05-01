import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import {Pedidosadmin} from 'src/app/models/pedidoAsociado.interface';

@Component({
  selector: 'app-pedidos-asociado',
  templateUrl: './pedidos-asociado.component.html',
  styleUrls: ['./pedidos-asociado.component.css']
})
export class PedidosAsociadoComponent implements OnInit {

  constructor(private api:ClienteService, private activaterouter:ActivatedRoute, private router:Router,) { }

  pedidoRealizado:Pedidosadmin[]=[];
  pedidoEnviado:Pedidosadmin[]=[];
  pedidos:Array<any>=[];
  asociado:any;
  index:number=0;
  mostrarPedidoRealizado:Array<any>=[];
  mostrarPedidoEnviado:Array<any>=[];

  //hay que ver en la tabla de productos.asociado_id y el asociado ya que ambos son distintos pero son de un mismo asociado
  ngOnInit(): void {
    this.asociado=localStorage.getItem('asociado_id');
    this.api.getPedidosUsers().subscribe(data=>{
      for (let index = 0; index < data.length; index++) {
        if (data[index].estado === "Realizado" && data[index].asociado_id==this.asociado ) {
          this.pedidoRealizado.push(data[index]);
          let repetidos = {};
          this.pedidoRealizado = this.pedidoRealizado.filter(function(current) {
            let exists = !repetidos[current.id];
            repetidos[current.id] = true;
            return exists;
          });
          console.log(this.pedidoRealizado)
        }else{
          console.log("No hay pedidos realizados")
        }

        if(data[index].estado === "Enviado" && data[index].asociado_id==this.asociado){
          this.pedidoEnviado.push(data[index]);
          let repetidos = {};
          this.pedidoEnviado=this.pedidoEnviado.filter(function(current){
            let exists = !repetidos[current.id];
            repetidos[current.id] = true;
            return exists;
          })
          //console.log(this.pedidoEnviado)
        }else{
          console.log("No hay pedidos enviados")
        }
        
      }
        
      

    })
  }

  verPedidosRealizados(id:any){
    this.router.navigate(['pedidos/realizados', id])
  }

  verPedidosEnviados(id:any){
    this.router.navigate(['pedidos/enviados', id])
  }

}

/*
Hay que revisar los pedidos y colocar fecha porque no se distingue cuales 
pedidos realizados fueron primero y cuales pedidos enviados estan después
*/ 