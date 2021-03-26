<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;
    public function asociados(){
        return $this-> belongsTo(Asociado::class)->withTimeStamps();
    }

    public function detalleFactura(){
        return $this->hasMany(DetalleFactura::class)->withTimeStamps();
    }
}
