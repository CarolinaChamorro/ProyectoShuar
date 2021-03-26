<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\AsociadoController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ConductorController;
use App\Http\Controllers\CatalogoController;
use App\Http\Controllers\DetalleFacturaController;
use App\Http\Controllers\DetalleRutaController;
use App\Http\Controllers\FacturaController;
use App\Http\Controllers\PedidoConductorController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\ServicioController;
use App\Http\Controllers\TipoVehiculoController;
use App\Http\Controllers\VehiculoController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

//User
Route::get('/users',[UserController::class, 'index']);

//Asociado
Route::get('/asociado',[AsociadoController::class, 'index']);
Route::post('/asociado/create', [AsociadoController::class, 'store']);
Route::get('/asociado/{id}', [AsociadoController::class, 'show']);
Route::put('/asociado/{id}',[AsociadoController::class, 'update']);
Route::delete('/asociado/{id}', [AsociadoController::class, 'destroy']);

//cliente
Route::get('/cliente',[ClienteController::class, 'index']);
Route::post('/cliente/create', [ClienteController::class, 'store']);
Route::get('/cliente/{id}', [ClienteController::class, 'show']);
Route::put('/cliente/{id}',[ClienteController::class, 'update']);
Route::delete('/cliente/{id}', [ClienteController::class, 'destroy']);

//Conductor
Route::get('/conductor',[ConductorController::class, 'index']);
Route::post('/conductor/create', [ConductorController::class, 'store']);
Route::get('/conductor/{id}', [ConductorController::class, 'show']);
Route::put('/conductor/{id}',[ConductorController::class, 'update']);
Route::delete('/conductor/{id}', [ConductorController::class, 'destroy']);


//Detallefactura
Route::get('/detalle/factura',[DetalleFacturaController::class, 'index']);
Route::post('/detalle/factura/create', [DetalleFacturaController::class, 'store']);
Route::get('/detalle/factura/{id}', [DetalleFacturaController::class, 'show']);
Route::put('/detalle/factura/{id}',[DetalleFacturaController::class, 'update']);
Route::delete('/detalle/factura/{id}', [DetalleFacturaController::class, 'destroy']);

//DetalleRuta
// Route::get('/detalle/ruta',[DetalleRutaController::class, 'index']);
// Route::post('/detalle/ruta/create', [DetalleRutaController::class, 'store']);
// Route::get('/detalle/ruta/{id}', [DetalleRutaController::class, 'show']);
// Route::put('/detalle/ruta/{id}',[DetalleRutaController::class, 'update']);
// Route::delete('/detalle/ruta/{id}', [DetalleRutaController::class, 'destroy']);

//Factura
Route::get('/factura',[FacturaController::class, 'index']);
Route::post('/factura/create', [FacturaController::class, 'store']);
Route::get('/factura/{id}', [FacturaController::class, 'show']);
Route::put('/factura/{id}',[FacturaController::class, 'update']);
Route::delete('/factura/{id}', [FacturaController::class, 'destroy']);

//PedidoConductor
// Route::get('/pedido/conductor',[PedidoConductorController::class, 'index']);
// Route::post('/pedido/conductor/create', [PedidoConductorController::class, 'store']);
// Route::get('/pedido/conductor/{id}', [PedidoConductorController::class, 'show']);
// Route::put('/pedido/conductor/{id}',[PedidoConductorController::class, 'update']);
// Route::delete('/pedido/conductor/{id}', [PedidoConductorController::class, 'destroy']);

//Producto
Route::get('/producto',[ProductoController::class, 'index']);
Route::post('/producto/create', [ProductoController::class, 'store']);
Route::get('/producto/{id}', [ProductoController::class, 'show']);
Route::put('/producto/{id}',[ProductoController::class, 'update']);
Route::delete('/producto/{id}', [ProductoController::class, 'destroy']);

//Servicio
Route::get('/servicio',[ServicioController::class, 'index']);
Route::post('/servicio/create', [ServicioController::class, 'store']);
Route::get('/servicio/{id}', [ServicioController::class, 'show']);
Route::put('/servicio/{id}',[ServicioController::class, 'update']);
Route::delete('/servicio/{id}', [ServicioController::class, 'destroy']);

//TipoVehiculo
Route::get('/tipo/vehiculo',[TipoVehiculoController::class, 'index']);
Route::post('/tipo/vehiculo/create', [TipoVehiculoController::class, 'store']);
Route::get('/tipo/vehiculo/{id}', [TipoVehiculoController::class, 'show']);
Route::put('/tipo/vehiculo/{id}',[TipoVehiculoController::class, 'update']);
Route::delete('/tipo/vehiculo/{id}', [TipoVehiculoController::class, 'destroy']);

//Vehiculo
Route::get('/vehiculo',[VehiculoController::class, 'index']);
Route::post('/vehiculo/create', [VehiculoController::class, 'store']);
Route::get('/vehiculo/{id}', [VehiculoController::class, 'show']);
Route::put('/vehiculo/{id}',[VehiculoController::class, 'update']);
Route::delete('/vehiculo/{id}', [VehiculoController::class, 'destroy']);
