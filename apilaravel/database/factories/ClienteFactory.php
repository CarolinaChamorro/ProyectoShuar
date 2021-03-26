<?php

namespace Database\Factories;

use App\Models\Cliente;
use Illuminate\Database\Eloquent\Factories\Factory;

class ClienteFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Cliente::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'cedula'=>$this->faker->numberBetween($min = 1000000000, $max = 9000000000),
            'telefono'=>$this->faker->e164PhoneNumber,
            'direccion'=>$this->faker->address,
            'numero_casa'=>$this->faker->buildingNumber,   
            'rol'   =>$this->faker->jobTitle,
            'user_id' => random_int(1, 5),
        ];
    }
}
