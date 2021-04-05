import { Component, OnInit } from '@angular/core';
import { AsociadoService } from '../../services/asociado.service';

@Component({
  selector: 'app-perfil-asociado',
  templateUrl: './perfil-asociado.component.html',
  styleUrls: ['./perfil-asociado.component.css']
})
export class PerfilAsociadoComponent implements OnInit {

  constructor(private api:AsociadoService) { }

  asociados:any;
  users:any;
  usuarioData:any;
  asociadoData:any;


  ngOnInit(): void {
    this.api.getAllAsociados().subscribe(res=>{
      this.asociados=res;
      this.asociadoData=localStorage.getItem('asociado_id');
      console.log(this.asociados);
    });

      this.api.getAllUsers().subscribe(res=>{
        this.users=res;
        this.usuarioData=localStorage.getItem('user_id');
        console.log(this.users);
      })

      
  }
  
}
