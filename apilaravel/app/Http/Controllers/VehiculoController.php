<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vehiculo;
use App\Http\Resources\VehiculoResource;
use Illuminate\Support\Facades\Storage;

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
        $file=$request->file('archivo');
        $ruta=$file->storeAs('img',$file->getClientOriginalName(),'public');
        $dataVehiculo=json_decode($request->vehiculo, true);
        $vehiculo= new Vehiculo();
        $vehiculo->num_placa=$dataVehiculo['num_placa'];
        $vehiculo->modelo=$dataVehiculo['modelo'];
        $vehiculo->marca=$dataVehiculo['marca'];
        $vehiculo->color=$dataVehiculo['color'];
        $vehiculo->num_matricula=$dataVehiculo['num_matricula'];
        $vehiculo->foto_vehiculo=$ruta;
        $vehiculo->conductor_id=$dataVehiculo['conductor_id'];
        $vehiculo->tipo_vehiculo_id=$dataVehiculo['tipo_vehiculo_id'];

        $vehiculo->save();
        return response()->json([
            'data'=> $vehiculo,
            'msg' =>[
                'summary'=>'Se creo correctamente',
                'detail'=> 'esta bien'
            ]
            ],201);
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
        $vehiculo = Vehiculo::find($id);
      return $vehiculo;
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
        $dataVehiculo=json_decode($request->vehiculo, true);
        if($vehiculo->foto_vehiculo != $dataVehiculo['foto_vehiculo']){
            Storage::delete($vehiculo->foto_vehiculo);
          $file=$request->file('archivo');
          $ruta=$file->storeAs('img',$file->getClientOriginalName(),'public');
          $vehiculo->foto_vehiculo=$ruta;
        }
        $vehiculo->num_placa=$dataVehiculo['num_placa'];
        $vehiculo->modelo=$dataVehiculo['modelo'];
        $vehiculo->marca=$dataVehiculo['marca'];
        $vehiculo->color=$dataVehiculo['color'];
        $vehiculo->num_matricula=$dataVehiculo['num_matricula'];

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
