<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PedidoConductor;
use App\Http\Resources\PedidoConductorResource;


class PedidoConductorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pedido_conductor=PedidoConductor::all();
        return $pedido_conductor;
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
        $pedido_conductor= new PedidoConductor();
        $pedido_conductor->estado=$request->estado;
        $pedido_conductor->conductor_id=$request->conductor_id;
        $pedido_conductor->detalle_factura_id=$request->detalle_factura_id;

        if($pedido_conductor->save()){
            return new PedidoConductorResource($pedido_conductor);
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
        $pedido_conductor = PedidoConductor::findOrFail($id);
        return new PedidoConductorResource($pedido_conductor);
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
        $pedido_conductor = PedidoConductor::findOrFail($id);
        $pedido_conductor->estado=$request->estado;
        if($pedido_conductor->save()){
            return new PedidoConductorResource($pedido_conductor);
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
        $pedido_conductor = PedidoConductor::findOrFail($id);
        if($pedido_conductor->delete()){
            return new PedidoConductorResource($pedido_conductor);
        }

    }
}
