<?php

namespace Database\Factories;

use App\Models\Asociado;
use Illuminate\Database\Eloquent\Factories\Factory;

class AsociadoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Asociado::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'num_identificacion'=>$this->faker->numberBetween($min = 1000000000, $max = 9000000000),
            'nombre_empresa'=>$this->faker->company,
            'actividad_comercial'=>$this->faker->sentence($nbWords = 2, $variableNbWords = true),
            'direccion'=>$this->faker->address,
            'foto_asociado'=>$this->faker->imageUrl($width = 640, $height = 480),
            'zona'=>$this->faker->timezone,
            'rol'   =>$this->faker->jobTitle,
            'user_id' => random_int(1, 3),
            'servicio_id' => random_int(1, 3),
        ];
    }
}
