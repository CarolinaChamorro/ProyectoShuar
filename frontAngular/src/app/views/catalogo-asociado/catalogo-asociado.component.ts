import { Component, OnInit } from '@angular/core';
import { AsociadoService } from '../../services/asociado.service';
import {ToastrService} from 'ngx-toastr';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-catalogo-asociado',
  templateUrl: './catalogo-asociado.component.html',
  styleUrls: ['./catalogo-asociado.component.css']
})
export class CatalogoAsociadoComponent implements OnInit {

  constructor(private api:AsociadoService,private toastr:ToastrService,private router: Router) { }

  asociados:any;
  users:any;
  usuarioData:any;
  asociadoData:any;
  productos:any;
  productoData:any;

  ngOnInit(): void {
    
    this.asociadoData=localStorage.getItem('asociado_id');
    
    this.usuarioData=localStorage.getItem('user_id');

    this.api.getAllAsociados().subscribe(res=>{
      this.asociados=res;
    });

      this.api.getAllUsers().subscribe(res=>{
        this.users=res;
      })

      this.api.getAllProducto().subscribe(res=>{
        this.productos=res;
        console.log(this.productoData)
        for (const iteratorPro of res) {
          if(iteratorPro.asociado_id == localStorage.getItem('asociado_id')){
            this.productoData=iteratorPro;
            console.log(iteratorPro)
          }
        }
      });
      
  }
  

}
