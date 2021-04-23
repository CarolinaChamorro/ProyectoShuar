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
import { CatalogoAsociadoComponent } from './views/catalogo-asociado/catalogo-asociado.component';
import { CatalogoClienteComponent } from './views/catalogo-cliente/catalogo-cliente.component';
import { CarritoComponent } from './views/carrito/carrito.component';
import { PedidosAsociadoComponent } from './views/pedidos-asociado/pedidos-asociado.component';
import { VerpedidoComponent } from './views/pedidos-asociado/verpedido/verpedido.component';
import { VerpedidoRealizadoComponent } from './views/pedidos-asociado/verpedido-realizado/verpedido-realizado.component';
import { ConductorEditComponent } from './views/conductor-edit/conductor-edit.component';
import { ClienteEditComponent } from './views/cliente-edit/cliente-edit.component';
import { AsociadoEditComponent } from './components/asociado-edit/asociado-edit.component';

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

{path:'perfil/conductor/edit/:id',component: VehiculoEditComponent},

{ path: 'producto', component:ProductosComponent }, 

{ path:'producto/edit/:id',component:ProductoEditComponent},

{path:'perfil/asociado',component: PerfilAsociadoComponent},

{path:'perfil/conductor',component: PerfilConductorComponent},

{path:'perfil/cliente',component: PerfilClienteComponent},

{path:'catalogo/asociado',component: CatalogoAsociadoComponent},

{path:'catalogo/cliente',component: CatalogoClienteComponent},

{path:'carrito',component: CarritoComponent},

{path:'pedidos/asociado',component: PedidosAsociadoComponent},

//ver pedidosAdmin
{path:'pedidos/realizados/:id', component:VerpedidoComponent},

{path:'pedidos/enviados/:id', component:VerpedidoRealizadoComponent},

{path:'conductor/edit/:id', component:ConductorEditComponent},

{path:'cliente/edit/:id', component:ClienteEditComponent},

{path:'perfil/asociado/edit/:id',component:AsociadoEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,RegistrarseComponent,
  LoginComponent,AsociadoComponent,ConductorComponent,ClienteComponent, VehiculoComponent, 
  FacturaComponent, PerfilVehiculoComponent, VehiculoEditComponent, ProductosComponent,
PerfilClienteComponent,PerfilConductorComponent,PerfilAsociadoComponent,CatalogoClienteComponent,
CatalogoAsociadoComponent, CarritoComponent, PedidosAsociadoComponent, VerpedidoComponent,ConductorEditComponent]
