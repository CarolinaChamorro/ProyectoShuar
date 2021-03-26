<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vehiculo;
use App\Http\Resources\VehiculoResource;

class VehiculoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vehiculo=Vehiculo::all();
        return $vehiculo;
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
        $vehiculo= new Vehiculo();
        $vehiculo->num_placa=$request->num_placa;
        $vehiculo->modelo=$request->modelo;
        $vehiculo->marca=$request->marca;
        $vehiculo->color=$request->color;
        $vehiculo->num_matricula=$request->num_matricula;
        $vehiculo->foto_vehiculo=$request->foto_vehiculo;
        $vehiculo->conductor_id=$request->conductor_id;
        $vehiculo->tipo_vehiculo=$request->tipo_vehiculo;

        if($vehiculo->save()){
            return new VehiculoResource($vehiculo);
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
        $vehiculo = Vehiculo::findOrFail($id);
        return new VehiculoResource($vehiculo);
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
        $vehiculo = Vehiculo::findOrFail($id);
        $vehiculo->num_placa=$request->num_placa;
        $vehiculo->modelo=$request->modelo;
        $vehiculo->marca=$request->marca;
        $vehiculo->color=$request->color;
        $vehiculo->num_matricula=$request->num_matricula;
        $vehiculo->foto_vehiculo=$request->foto_vehiculo;

        if($vehiculo->save()){
            return new VehiculoResource($vehiculo);
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
        $vehiculo = Vehiculo::findOrFail($id);
        if($vehiculo->delete()){
            return new VehiculoResource($vehiculo);
        }
    }
}
