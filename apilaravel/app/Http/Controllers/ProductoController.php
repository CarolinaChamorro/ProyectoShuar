<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;
use App\Http\Resources\ProductoResource;
use Illuminate\Support\Facades\Storage;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $producto=Producto::all();
        return $producto;
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
        $dataProducto=json_decode($request->producto,true);
        $producto= new Producto();
        $producto->nombre=$dataProducto['nombre'];
        $producto->detalle=$dataProducto['detalle'];
        $producto->precio=$dataProducto['precio'];
        $producto->foto=$ruta;
        $producto->asociado_id=$dataProducto['asociado_id'];

        $producto->save();
        return response()->json([
            'data'=> $producto,
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
        $producto = Producto::findOrFail($id);
        return new ProductoResource($producto);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $producto = Producto::find($id);
      return $producto;
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
        $producto = Producto::findOrFail($id);
        $dataProducto=json_decode($request->producto,true);
        if($producto->foto != $dataProducto['foto']){
            Storage::delete($producto->foto);
            $file=$request->file('archivo');
            $ruta=$file->storeAs('img',time() .  $file->getClientOriginalName(),'public');
            $producto->foto=$ruta;
        }
        $producto->nombre=$dataProducto['nombre'];
        $producto->detalle=$dataProducto['detalle'];
        $producto->precio=$dataProducto['precio'];
        $producto->asociado_id=$dataProducto['asociado_id'];
        if($producto->save()){
            return new ProductoResource($producto);
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
        $producto = Producto::findOrFail($id);
        Storage::delete($producto->foto);
        if($producto->delete()){
            return new ProductoResource($producto);
        }
    }
}
