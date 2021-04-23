<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use App\Http\Resources\ClienteResource;

class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cliente= Cliente::all();
        return $cliente;
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
        $cliente= new Cliente();
        $cliente->cedula=$request->cedula;
        $cliente->telefono=$request->telefono;
        $cliente->direccion=$request->direccion;
        $cliente->numero_casa=$request->numero_casa;
        $cliente->rol=$request->rol;
        $cliente->user_id=$request->user_id;

        if($cliente->save()){
            return new ClienteResource($cliente);
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
        $cliente=Cliente::where("clientes.user_id", "=", $id)
        ->select("users.name", "users.email", "clientes.cedula", "clientes.direccion", "clientes.telefono")
        ->join("users", "users.id", "=", "clientes.user_id")
        ->get();
        return $cliente;
    }

    public function mostrar($id){
        $cliente = Cliente::findOrFail($id);
        return new ClienteResource($cliente);
    }

    //Id asociado, 
    public function rol()
    {
        $cliente = Cliente::select("users.id", "users.name", "users.email", "clientes.cedula", "clientes.telefono", "clientes.direccion", "clientes.numero_casa", "detalle_facturas.cliente_id","detalle_facturas.estado", "productos.asociado_id")
        ->join("users", "users.id", "=", "clientes.user_id")
        ->join("detalle_facturas", "detalle_facturas.cliente_id", "=", "clientes.id")
        ->join("productos","productos.id", "=", "detalle_facturas.producto_id")
        ->get();
        return $cliente;
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $cliente = Cliente::find($id);
        return new ClienteResource($cliente);
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
        $cliente = Cliente::findOrFail($id);
        $cliente->cedula=$request->cedula;
        $cliente->telefono=$request->telefono;
        $cliente->direccion=$request->direccion;
        $cliente->numero_casa=$request->numero_casa;

        if($cliente->save()){
            return new ClienteResource($cliente);
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
        $cliente = Cliente::findOrFail($id);
        if($cliente->delete()){
            return new ClienteResource($cliente);
        }
    }
}
