<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class)->withTimeStamps();
    }

    public function factura(){
        return $this-> hasOne(Factura::class)->withTimeStamps();
    }
    public function detalleFactura(){
        return $this-> hasMany(DetalleFactura::class)->withTimeStamps();
    }
    
}
