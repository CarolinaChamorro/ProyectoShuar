<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PedidoConductor extends Model
{
    use HasFactory;
    public function detalleFactura (){
        return $this->belongsTo(DetalleFactura::class)->withTimeStamps();
    }
    public function conductor(){
        return $this->belongsTo(Conductor::class)->withTimeStamps();
    }

}
