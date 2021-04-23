import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegistrarseComponent } from './views/registrarse/registrarse.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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
import { PerfilClienteComponent } from './views/perfil-cliente/perfil-cliente.component';
import { PerfilConductorComponent } from './views/perfil-conductor/perfil-conductor.component';
import { CatalogoClienteComponent } from './views/catalogo-cliente/catalogo-cliente.component';
import { CatalogoAsociadoComponent } from './views/catalogo-asociado/catalogo-asociado.component';
import { CarritoComponent } from './views/carrito/carrito.component';
import { PedidosAsociadoComponent } from './views/pedidos-asociado/pedidos-asociado.component';
import { VerpedidoComponent } from './views/pedidos-asociado/verpedido/verpedido.component';
import { VerpedidoRealizadoComponent } from './views/pedidos-asociado/verpedido-realizado/verpedido-realizado.component';
import { ConductorEditComponent } from './views/conductor-edit/conductor-edit.component';
import { ClienteEditComponent } from './views/cliente-edit/cliente-edit.component';
import { AsociadoEditComponent } from './components/asociado-edit/asociado-edit.component';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    LoginComponent,
    RegistrarseComponent,
    NavbarComponent,
    HomeComponent,
    AsociadoComponent,
    ConductorComponent,
    ClienteComponent,
    VehiculoComponent,
    FacturaComponent,
    PerfilVehiculoComponent,
    VehiculoEditComponent,
    ProductosComponent,
    ProductoEditComponent,
    PerfilAsociadoComponent,
    PerfilClienteComponent,
    PerfilConductorComponent,
    CatalogoClienteComponent,
    CatalogoAsociadoComponent,
    CarritoComponent,
    PedidosAsociadoComponent,
    VerpedidoComponent,
    VerpedidoRealizadoComponent,
    ConductorEditComponent,
    ClienteEditComponent,
    AsociadoEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
