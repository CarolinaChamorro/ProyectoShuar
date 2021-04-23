<?php

namespace Database\Factories;

use App\Models\Conductor;
use Illuminate\Database\Eloquent\Factories\Factory;

class ConductorFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Conductor::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'cedula'=>$this->faker->numberBetween($min = 1000000000, $max = 9000000000),
            'tipo_licencia'=>$this->faker->word,
            'rol'   =>$this->faker->jobTitle,
            'user_id' => random_int(1, 3),
        ];
    }
}
