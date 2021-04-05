<?php

namespace Database\Factories;

use App\Models\Vehiculo;
use Illuminate\Database\Eloquent\Factories\Factory;

class VehiculoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Vehiculo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'num_placa'=>$this->faker->numberBetween($min = 1000, $max = 9000),
            'modelo'=>$this->faker->word,
            'marca'=>$this->faker->word,
            'color'=>$this->faker->safeColorName,
            'num_matricula'=>$this->faker->imageUrl($width = 640, $height = 480),
            'foto_vehiculo'=>$this->faker->imageUrl($width = 640, $height = 480),
            'conductor_id' => random_int(1, 5),
            'tipo_vehiculo_id' => random_int(1, 3),

        ];
    }
}
