<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePedidoConductorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedido_conductors', function (Blueprint $table) {
            $table->id();
            $table->string('estado');
            $table->timestamps();
            //foreign keys
            $table->unsignedBigInteger('conductor_id');
            $table->foreign('conductor_id')->references('id')->on('conductors')->onDelete('cascade')->onUpdate('cascade');

            $table->unsignedBigInteger('detalle_factura_id');
            $table->foreign('detalle_factura_id')->references('id')->on('detalle_facturas')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedido_conductors');
    }
}
