<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Asociado;
use App\Http\Resources\AsociadoResource;

class AsociadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $asociado = Asociado::all();
         return $asociado;
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
        $asociado= new Asociado();
        $asociado->num_identificacion=$request->num_identificacion;
        $asociado->nombre_empresa=$request->nombre_empresa;
        $asociado->actividad_comercial=$request->actividad_comercial;
        $asociado->direccion=$request->direccion;
        $asociado->foto_asociado=$request->foto_asociado;
        $asociado->zona=$request->zona;
        $asociado->rol=$request->rol;
        $asociado->user_id=$request->user_id;
        $asociado->servicio_id=$request->servicio_id;

        if($asociado->save()){
            return new AsociadoResource($asociado);
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
        $asociado = Asociado::findOrFail($id);
        return new AsociadoResource($asociado);
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
        $asociado= Asociado::findOrFail($id);
        $asociado->num_identificacion=$request->num_identificacion;
        $asociado->nombre_empresa=$request->nombre_empresa;
        $asociado->actividad_comercial=$request->actividad_comercial;
        $asociado->direccion=$request->direccion;
        $asociado->foto_asociado=$request->foto_asociado;
        $asociado->zona=$request->zona;
        $asociado->servicio_id=$request->servicio_id;

        if($asociado->save()){
            return new AsociadoResource($asociado);
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
        $asociado= Asociado::findOrFail($id);

        if($asociado->delete()){
            return new AsociadoResource($asociado);
        }
    }
}
