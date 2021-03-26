<?php

namespace Database\Factories;

use App\Models\DetalleRuta;
use Illuminate\Database\Eloquent\Factories\Factory;

class DetalleRutaFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = DetalleRuta::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'longitud'=>$this->faker->longitude($min = -180, $max = 180),
            'latitud'=>$this->faker->latitude($min = -90, $max = 90),
            'asociado_id' => random_int(1, 5),
        ];
    }
}
