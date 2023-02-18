<?php

namespace Database\Factories;

use App\Models\Factura;
use Illuminate\Database\Eloquent\Factories\Factory;

class FacturaFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Factura::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'num_factura'=>$this->faker->numberBetween($min = 1000000000, $max = 9000000000),
            'fecha_elab'=>$this->faker->word,
            'cliente_id' => random_int(1, 3),
        ];
    }
}
