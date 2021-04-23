<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetalleFactura extends Model
{
    use HasFactory;


    public function productos(){
        return $this-> belongsToMany(Producto::class)->withTimeStamps();
    }
    
    public function cliente(){
        return $this->belongsTo(Cliente::class)->withTimeStamps();
    }

    public function pedidoConductor (){
        return $this->hasOne(PedidoConductor::class)->withTimeStamps();
    }

}
