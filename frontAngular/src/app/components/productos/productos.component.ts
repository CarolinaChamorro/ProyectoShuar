import { Component, OnInit } from '@angular/core';
import { Producto } from '../../class/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  producto:any;
  productos= new Producto();

  constructor(private dataService:ProductoService) { }

  ngOnInit(): void {
    this.getProductoData()
    this.productos.asociado_id=localStorage.getItem('asociado_id');
  }
  getProductoData(){
    this.dataService.getData().subscribe(res=>{
     this.producto=res});
  }
  addData(){
    this.dataService.addData(this.productos).subscribe(res=>{ 
      this.getProductoData();
    }) 
  }
  deleteData(id:string){
    this.dataService.deleteData(id).subscribe(res=>{
    this.getProductoData();
    console.log(res) ;
    })
    this.getProductoData();
   }
}
