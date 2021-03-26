<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DetalleFactura;
use App\Http\Resources\DetalleFacturaResource;

class DetalleFacturaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $detalle_factura=DetalleFactura::all();
        return $detalle_factura;
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
        $detalle_factura=new DetalleFactura();
        $detalle_factura->cantidad=$request->cantidad;
        $detalle_factura->estado=$request->estado;
        $detalle_factura->factura_id=$request->factura_id;
        $detalle_factura->producto_id=$request->producto_id;

        if($detalle_factura->save()){
            return new DetalleFacturaResource($detalle_factura);
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
        $detalle_factura = DetalleFactura::findOrFail($id);
        return new DetalleFacturaResource($detalle_factura);
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
        $detalle_factura = DetalleFactura::findOrFail($id);
        $detalle_factura->cantidad=$request->cantidad;
        $detalle_factura->estado=$request->estado;
        if($detalle_factura->save()){
            return new DetalleFacturaResource($detalle_factura);
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
        $detalle_factura = DetalleFactura::findOrFail($id);
        if($detalle_factura->delete()){
            return new DetalleFacturaResource($detalle_factura);
        }
    }
}
