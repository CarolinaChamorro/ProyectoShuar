import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../../services/factura.service';
import { Factura } from '../../class/factura';
import { Router } from '@angular/router';
import { DetallePedido } from '../../models/detallePedido.interface';
import { ClienteService } from 'src/app/services/cliente.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  constructor(private dataService: FacturaService, private api: ClienteService, private toastr: ToastrService, private router: Router) {
    function getRandom(max: any, min: any) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    this.valor = getRandom(9999999, 1);

  }

  factura: any;
  facturas = new Factura();
  valor: any;
  curDate = new Date();

  //pedidoCliente
  pedidoUserProducto: Array<any> = [];
  detallesPedido: DetallePedido[] = [];
  pedidoAgregado:DetallePedido[]=[];
  index: number = 0;
  subtotal: any = [];
  total: number = 0
  pedido = {
    estado: "Realizado"
  }


  ngOnInit(): void {
    this.getFacturaData()
    this.facturas.num_factura = this.valor
    this.facturas.fecha_elab = this.curDate;
    //cambiar a cliente_id
    this.facturas.cliente_id = localStorage.getItem('cliente_id');

    //pedidoCliente
    let perfilUser = localStorage.getItem('user_id');
    let pedidoProductos = localStorage.getItem('cliente_id');
    this.api.perfilCliente(perfilUser).subscribe(data => {
      this.pedidoUserProducto = data;
      //console.log(this.pedidoUserProducto)
    })
    this.api.detallesPedido(pedidoProductos).subscribe(data => {
      for (let j = 0; j < data.length; j++) {
        if (data[j].estado ==="Agregado") {
          this.detallesPedido = data;
          this.pedidoAgregado.push(data[j])
          console.log(this.detallesPedido)
          this.subtotal.push(this.detallesPedido[j].cantidad * this.detallesPedido[j].precio)  
          //console.log(this.subtotal)     
        }
      }      
      for (let i = 0; i < this.subtotal.length; i++) {
        let numero = this.subtotal[i];
        this.total += numero; 
        console.log(this.total);       
      }      
      console.log(this.detallesPedido);
    })


  }

  getFacturaData() {
    this.dataService.getData().subscribe(res => {
      this.factura = res
    });
  }
  addData() {
    this.dataService.addData(this.facturas).subscribe(res => {
      this.getFacturaData();
      this.confirmarPedido();
    })
  }
//Pedido
  updateStatus(id: any, data: any) {
    this.api.updateDetalles(id, data).subscribe(data => {
      console.log(data);
    },
    err => {
      this.toastr.warning('Intentalo más tarde', 'Pedido error', {
        positionClass: 'toast-bottom-left'
      })
     })
  }
  
  confirmarPedido() {
    for (let index = 0; index < this.detallesPedido.length; index++) {
      if(this.detallesPedido[index].estado === 'Agregado'){
      this.updateStatus(this.detallesPedido[index].id, this.pedido)
      }
    }
    this.router.navigate(['catalogo/cliente'])
    this.toastr.success('Pedido registrado', 'Pedido', {
      positionClass: 'toast-top-right'
    })
  }

  deleteData(id: string) {
    this.dataService.deleteData(id).subscribe(res => {
      this.getFacturaData();
      console.log(res);
    })
    this.getFacturaData();
  }

}


//for (let j = 0; j < data.length; j++) {
  //   if (data[j].estado ==="Agregado" ) {
  //     this.detallesPedido.push(data[j]);
  //     console.log('---------')
  //     console.log(this.detallesPedido)
  //     for (let x = 0; x < this.detallesPedido.length; x++) {
  //       const element = this.detallesPedido[x];
  //       this.subtotal.push(element.cantidad * element.precio)  
  //     console.log(this.subtotal)  
  //     for (let i = 0; i < this.subtotal.length; i++) {
  //       let numero = this.subtotal[i];
  //       this.total += numero; 
  //       console.log(this.total);       
  //     }  
  //     }


  //   }
  // }  