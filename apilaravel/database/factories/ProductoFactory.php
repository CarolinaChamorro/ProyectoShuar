<?php

namespace Database\Factories;

use App\Models\Producto;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Producto::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nombre'=>$this->faker->word,
            'detalle'=>$this->faker->sentence($nbWords = 3, $variableNbWords = true),
            'precio'=>$this->faker->randomFloat($nbMaxDecimals = NULL, $min = 0, $max = NULL),
            'foto'=>$this->faker->imageUrl($width = 640, $height = 480),
            'asociado_id' => random_int(1, 3),
        ];
    }
}
