<?php

namespace Database\Factories;

use App\Models\DetalleFactura;
use Illuminate\Database\Eloquent\Factories\Factory;

class DetalleFacturaFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = DetalleFactura::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            
            'cantidad'=>$this->faker->randomDigit,
            'estado'=>$this->faker->word,  
            'factura_id' => random_int(1, 5),
            'producto_id' => random_int(1, 5),
        ];
    }
}
