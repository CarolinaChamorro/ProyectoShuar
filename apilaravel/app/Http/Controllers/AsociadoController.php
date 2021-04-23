<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Asociado;
use App\Http\Resources\AsociadoResource;
use Illuminate\Support\Facades\Storage;

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
        $file=$request->file('archivo');
        $ruta=$file->storeAs('img', $file->getClientOriginalName(),'public');
        $dataAsociado=json_decode($request->asociado,true);
        $asociado= new Asociado();
        $asociado->num_identificacion=$dataAsociado['num_identificacion'];
        $asociado->nombre_empresa=$dataAsociado['nombre_empresa'];
        $asociado->actividad_comercial=$dataAsociado['actividad_comercial'];
        $asociado->direccion=$dataAsociado['direccion'];
        $asociado->foto_asociado=$ruta;
        $asociado->zona=$dataAsociado['zona'];
        $asociado->rol=$dataAsociado['rol'];
        $asociado->user_id=$dataAsociado['user_id'];
        $asociado->servicio_id=$dataAsociado['servicio_id'];

       
        $asociado->save();
        return response()->json([
            'data'=> $asociado,
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
        $asociado = Asociado::find($id);
        return new AsociadoResource($asociado);
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
        $dataAsociado=json_decode($request->asociado,true);
        if ($asociado->foto_asociado != $dataAsociado['foto_asociado']){
            Storage::delete($asociado->foto_asociado);
            $file=$request->file('archivo');
            $ruta=$file->storeAs('img',time() . $file->getClientOriginalName(),'public');
            $asociado->foto_asociado=$ruta;
        }
        $asociado->num_identificacion=$dataAsociado['num_identificacion'];
        $asociado->nombre_empresa=$dataAsociado['nombre_empresa'];
        $asociado->actividad_comercial=$dataAsociado['actividad_comercial'];
        $asociado->direccion=$dataAsociado['direccion'];
        $asociado->zona=$dataAsociado['zona'];
        $asociado->servicio_id=$dataAsociado['servicio_id'];
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
