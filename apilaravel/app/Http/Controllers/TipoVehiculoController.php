<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TipoVehiculo;
use App\Http\Resources\TipoVehiculoResource;

class TipoVehiculoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tipo_vehiculo=TipoVehiculo::all();
        return $tipo_vehiculo;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tipo_vehiculo= new TipoVehiculo();
        $tipo_vehiculo->nombre_tipo=$request->nombre_tipo;
        if($tipo_vehiculo->save()){
            return new TipoVehiculoResource($tipo_vehiculo);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tipo_vehiculo = TipoVehiculo::findOrFail($id);
        return new TipoVehiculoResource($tipo_vehiculo);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $tipo_vehiculo = TipoVehiculo::findOrFail($id);
        $tipo_vehiculo->nombre_tipo=$request->nombre_tipo;
        if($tipo_vehiculo->save()){
            return new TipoVehiculoResource($tipo_vehiculo);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tipo_vehiculo = TipoVehiculo::findOrFail($id);
        if($tipo_vehiculo->delete()){
            return new TipoVehiculoResource($tipo_vehiculo);
        }
    }
}
