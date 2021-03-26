<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conductor extends Model
{
    use HasFactory;
    public function user(){
        return $this->belongsTo(User::class)->withTimeStamps();
    }

    public function pedidosConductor(){
        return $this->hasMany(PedidoConductor::class)->withTimeStamps();
    }

    public function vehiculo(){
        return $this->hasOne(Vehiculo::class)->withTimeStamps();
    }
}
