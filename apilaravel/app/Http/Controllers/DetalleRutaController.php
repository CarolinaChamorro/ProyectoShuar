<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DetalleRuta;
use App\Http\Resources\DetalleRutaResource;

class DetalleRutaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $detalle_ruta=DetalleRuta::all();
        return $detalle_ruta;
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
        $detalle_ruta=new DetalleRuta();
        $detalle_ruta->longitud=$request->longitud;
        $detalle_ruta->latitud=$request->latitud;
        $detalle_ruta->asociado_id=$request->asociado_id;

        if($detalle_ruta->save()){
            return new DetalleRutaResource($detalle_ruta);
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
        $detalle_ruta = DetalleRuta::findOrFail($id);
        return new DetalleRutaResource($detalle_ruta);
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
        $detalle_ruta = DetalleRuta::findOrFail($id);
        $detalle_ruta->longitud=$request->longitud;
        $detalle_ruta->latitud=$request->latitud;
        if($detalle_ruta->save()){
            return new DetalleRutaResource($detalle_ruta);
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
        $detalle_ruta = DetalleRuta::findOrFail($id);
        if($detalle_ruta->delete()){
            return new DetalleRutaResource($detalle_ruta);
        }
    }
}
