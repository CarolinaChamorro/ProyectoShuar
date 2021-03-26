<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asociado extends Model
{
    use HasFactory;
    public function user(){
        return $this->belongsTo(User::class)->withTimeStamps();
    }

    public function servicios(){
        return $this->belongsTo(Servicio::class)->withTimeStamps();
    }

    public function detalleRuta(){
        return $this->hasOne(DetalleRuta::class)->withTimeStamps();
    }
    public function productos(){
        return $this->hasMany(Producto::class)->withTimeStamps();
    }
}
