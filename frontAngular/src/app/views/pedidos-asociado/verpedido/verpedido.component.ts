import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { VerPedido } from '../../../models/verpedido.interface';
import { ClienteService } from 'src/app/services/cliente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verpedido',
  templateUrl: './verpedido.component.html',
  styleUrls: ['./verpedido.component.css']
})
export class VerpedidoComponent implements OnInit {

  constructor(private activaterouter:ActivatedRoute, private router:Router, 
    private api:ClienteService,private toastr:ToastrService) { }

//pedidoCliente
asociado:any;
pedidoUserProducto: Array<any> = [];
detallesPedido: VerPedido[] = [];
pedidoAgregado:VerPedido[]=[];
index: number = 0;
subtotal: any = [];
total: number = 0
pedido = {
  estado: "Enviado"
}

pedidoCliente:string;

  ngOnInit(): void {
    //pedidoCliente
     //this.activaterouter.snapshot.paramMap.get('id')[captura el id que se encuentra en el url del objecto seleccionado]
    let pedidoUser = this.activaterouter.snapshot.paramMap.get('id');
    this.asociado=localStorage.getItem('asociado_id');
    this.api.getAllCliente().subscribe(res=>{
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
        if(element.user_id == pedidoUser){
          this.pedidoCliente=element.id;
          console.log(this.pedidoCliente)
          this.api.detallesPedidoAsociado(this.pedidoCliente).subscribe(data => {
            console.log(data)
            for (let j = 0; j < data.length; j++) {
              if (data[j].estado ==="Realizado" && data[j].asociado_id == this.asociado) {
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
      }
    })
    this.api.perfilCliente(pedidoUser).subscribe(data => {
      this.pedidoUserProducto = data;
      //console.log(this.pedidoUserProducto)
    })
   
  }

  //Pedido
  updateStatus(id: any, data: any) {
    this.api.updateDetalles(id, data).subscribe(data => {
      console.log(data);
    },
    err => {
      this.toastr.warning('Intentalo más tarde', 'Servidor', {
        positionClass: 'toast-bottom-left'
      })
    })
  }
  
  confirmarPedido() {
    for (let index = 0; index < this.detallesPedido.length; index++) {
      if(this.detallesPedido[index].estado === 'Realizado'){

        this.updateStatus(this.detallesPedido[index].id, this.pedido)
      }
    }
    this.router.navigate(['pedidos/asociado'])
    this.toastr.success('Pedido enviado', 'Pedido', {
      positionClass: 'toast-top-right'
    })
  }

}
