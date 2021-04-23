<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\User::factory(3)->create();
        \App\Models\Servicio::factory()->create(['nombre'=>'Ventas', 'estado'=>'Activo']);
        \App\Models\Servicio::factory()->create(['nombre'=>'Alimenticio', 'estado'=>'Activo']);
        \App\Models\Servicio::factory()->create(['nombre'=>'Médico', 'estado'=>'Activo']);

        \App\Models\TipoVehiculo::factory()->create(['nombre_tipo'=>'Propio']);
        \App\Models\TipoVehiculo::factory()->create(['nombre_tipo'=>'Arrendado']);
        \App\Models\TipoVehiculo::factory()->create(['nombre_tipo'=>'Cooperativa']);

        \App\Models\Cliente::factory(3)->create();
        \App\Models\Asociado::factory(3)->create();
        \App\Models\Conductor::factory(3)->create();
        \App\Models\DetalleRuta::factory(3)->create();
        \App\Models\Producto::factory(3)->create();
        \App\Models\Factura::factory(3)->create();
        \App\Models\DetalleFactura::factory(3)->create();
        \App\Models\Vehiculo::factory(3)->create();
        \App\Models\PedidoConductor::factory(3)->create();
    }
}
