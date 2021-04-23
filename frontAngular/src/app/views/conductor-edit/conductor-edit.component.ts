import { Component, OnInit } from '@angular/core';
import {Driver} from '../../class/conductor';
import { ConductorService } from '../../services/conductor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-conductor-edit',
  templateUrl: './conductor-edit.component.html',
  styleUrls: ['./conductor-edit.component.css']
})
export class ConductorEditComponent implements OnInit {

  constructor(private api:ConductorService, private toastr:ToastrService) { }

  conductorId:any;
  data:any;
  conductor=new Driver();

  ngOnInit(): void {
    this.conductorId=localStorage.getItem('conductor_id');

    //traer el cliente por su id
    this.api.getConductorById(this.conductorId).subscribe(res=>{
      this.data=res;
      this.conductor=this.data;
    });
  }

  UpdateConductor(){
    this.api.updateConductor(this.conductorId,this.conductor).subscribe(res=>{
      console.log(res);
      this.toastr.success('Se ha actualizado el perfil', 'Conductor', {
        positionClass: 'toast-top-right'
      })
    },
    err => {
      this.toastr.warning('Intentalo más tarde', 'Servidor', {
        positionClass: 'toast-bottom-left'
      })
    })
  }


}
