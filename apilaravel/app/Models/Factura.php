<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Factura extends Model
{
    use HasFactory;

    public function detalleFactura(){
        return $this->hasOne(DetalleFactura::class)->withTimeStamps();
    }
    
    public function cliente (){
        return $this->belongsTo(Cliente::class)->withTimeStamps();
    }

}
