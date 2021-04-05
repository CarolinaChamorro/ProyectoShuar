import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegistrarseComponent } from './views/registrarse/registrarse.component';
import { HomeComponent } from './views/home/home.component';
import { AsociadoComponent } from './views/asociado/asociado.component';
import { ConductorComponent } from './views/conductor/conductor.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { VehiculoComponent } from './views/vehiculo/vehiculo.component';
import { FacturaComponent } from './components/factura/factura.component';
import { PerfilVehiculoComponent } from './components/perfil-vehiculo/perfil-vehiculo.component';
import { VehiculoEditComponent } from './components/vehiculo-edit/vehiculo-edit.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';
import { PerfilAsociadoComponent } from './views/perfil-asociado/perfil-asociado.component';
import { PerfilConductorComponent } from './views/perfil-conductor/perfil-conductor.component';
import { PerfilClienteComponent } from './views/perfil-cliente/perfil-cliente.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},

  //Home
  {path:'home',component:HomeComponent}, 

  //Login
  {path:'login',component:LoginComponent},

  //Registrarse
  {path:'registrarse',component:RegistrarseComponent},

  //Asociado
  {path:'asociado',component:AsociadoComponent},

  //Conductor
  {path:'conductor',component:ConductorComponent},

  //Cliente
  {path:'cliente',component:ClienteComponent},

  //Vehiculo
  {path:'vehiculo',component: VehiculoComponent},
  
//Factura
{path:'factura',component: FacturaComponent},

{path:'perfil/vehiculo',component: PerfilVehiculoComponent},

{path:'perfil/vehiculo/edit/:id',component: VehiculoEditComponent},

{ path: 'producto', component:ProductosComponent }, 

{ path:'producto/edit/:id',component:ProductoEditComponent},

{path:'perfil/asociado',component: PerfilAsociadoComponent},

{path:'perfil/conductor',component: PerfilConductorComponent},

{path:'perfil/cliente',component: PerfilClienteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,RegistrarseComponent,
  LoginComponent,AsociadoComponent,ConductorComponent,ClienteComponent, VehiculoComponent, 
  FacturaComponent, PerfilVehiculoComponent, VehiculoEditComponent, ProductosComponent,
PerfilClienteComponent,PerfilConductorComponent,PerfilAsociadoComponent]
