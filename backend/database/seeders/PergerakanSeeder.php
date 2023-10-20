<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Pergerakan;

class PergerakanSeeder extends Seeder
{
    public function run()
    {
        $data = [
            [
                'id_proker' => 1, // Ganti dengan ID Proker yang sesuai
                'deskripsi_kegiatan' => 'Ini adalah deskripsi kegiatan pergerakan pertama.',
                'nama_pergerakan' => 'Pergerakan Pertama',
            ],
            [
                'id_proker' => 2, // Ganti dengan ID Proker yang sesuai
                'deskripsi_kegiatan' => 'Ini adalah deskripsi kegiatan pergerakan kedua.',
                'nama_pergerakan' => 'Pergerakan Kedua',
            ],
        ];

        foreach ($data as $item) {
            Pergerakan::create($item);
        }
    }
}
