<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehiculo extends Model
{
    use HasFactory;
    public function conductor(){
        return $this->belongsTo(Conductor::class)->withTimeStamps();
    }
    public function tipoVehiculo(){
        return $this->belongsTo(TipoVehiculo::class)->withTimeStamps();
    }
}
