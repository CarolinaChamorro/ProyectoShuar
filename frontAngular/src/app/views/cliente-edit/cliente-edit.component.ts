import { ClienteService } from './../../services/cliente.service';
import { Clientes } from './../../class/cliente';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {
  id:any;
  data:any;
  clientes = new Clientes();
  constructor(private route:ActivatedRoute ,private dataService:ClienteService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getData(); 
    console.log(this.id);
  }
  getData(){
    this.dataService.getClienteById(this.id).subscribe(res=>{
    this.data=res['data'];
    this.clientes=this.data;
    this.clientes.user_id=localStorage.getItem('user_id');
  })}
  updateCliente(){
    this.dataService.updateClienteData(this.id,this.clientes).subscribe(resp=>{console.log(resp)})
  }

}
