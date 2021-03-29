<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Conductor;
use App\Http\Resources\ConductorResource;

class ConductorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $conductor= Conductor::all();
        return $conductor;

        
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
        $conductor= new Conductor();
        $conductor->cedula=$request->cedula;
        $conductor->tipo_licencia=$request->tipo_licencia;
        $conductor->rol=$request->rol;
        $conductor->user_id=$request->user_id;

        if($conductor->save()){
            return new ConductorResource($conductor);
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
        $conductor = Conductor::findOrFail($id);
        return new ConductorResource($conductor);
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
        $conductor = Conductor::findOrFail($id);
        $conductor->cedula=$request->cedula;
        $conductor->tipo_licencia=$request->tipo_licencia;
        if($conductor->save()){
            return new ConductorResource($conductor);
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
        $conductor = Conductor::findOrFail($id);
        if($conductor->delete()){
            return new ConductorResource($conductor);
        }
    }
}
