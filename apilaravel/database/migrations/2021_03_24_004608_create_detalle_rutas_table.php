<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetalleRutasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalle_rutas', function (Blueprint $table) {
            $table->id();
            $table->string('longitud');
            $table->string('latitud');
            $table->timestamps();
            $table->unsignedBigInteger('asociado_id');
            $table->foreign('asociado_id')->references('id')->on('asociados')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detalle_rutas');
    }
}
