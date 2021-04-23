<?php

namespace Database\Factories;

use App\Models\PedidoConductor;
use Illuminate\Database\Eloquent\Factories\Factory;

class PedidoConductorFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PedidoConductor::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'estado'=>$this->faker->word,
            'conductor_id' => random_int(1, 3),
            'detalle_factura_id' => random_int(1, 3),
        ];
    }
}
