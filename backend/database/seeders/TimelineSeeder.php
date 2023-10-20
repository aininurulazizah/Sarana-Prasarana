<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Timeline;

class TimelineSeeder extends Seeder
{
    public function run()
    {
        $data = [
            [
                'nama_kegiatan' => 'Kegiatan Pertama',
                'tanggal_mulai' => '2023-10-20',
                'tanggal_akhir' => '2023-10-25',
            ],
            [
                'nama_kegiatan' => 'Kegiatan Kedua',
                'tanggal_mulai' => '2023-11-05',
                'tanggal_akhir' => '2023-11-10',
            ],
        ];

        foreach ($data as $item) {
            Timeline::create($item);
        }
    }
}
