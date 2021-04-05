import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../../services/factura.service';
import { Factura } from '../../class/factura';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  factura:any;
  facturas=new Factura();
  valor:any;
  curDate= new Date();
 
  
  constructor(private dataService:FacturaService) {
    function getRandom(max:any,min:any) {
      return Math.floor(Math.random() * (max - min) + min);
      }
   this.valor=getRandom(9999999,1);
   
   }
  ngOnInit(): void {
    this.getFacturaData()
    this.facturas.num_factura=this.valor
    this.facturas.fecha_elab=this.curDate;
    //cambiar a cliente_id
    this.facturas.cliente_id=localStorage.getItem('cliente_id');
  }
  getFacturaData(){
    this.dataService.getData().subscribe(res=>{
     this.factura=res});
  }
  addData(){
    this.dataService.addData(this.facturas).subscribe(res=>{ 
      this.getFacturaData();
    }) 
  }
  deleteData(id:string){
    this.dataService.deleteData(id).subscribe(res=>{
    this.getFacturaData();
    console.log(res) ;
    })
    this.getFacturaData();
   }

}