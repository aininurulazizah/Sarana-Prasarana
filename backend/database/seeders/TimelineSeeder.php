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
                'tanggal_selesai' => '2023-10-25',
                'izin_submit' => 'false'
            ],
            [
                'nama_kegiatan' => 'Kegiatan Kedua',
                'tanggal_mulai' => '2023-11-05',
                'tanggal_selesai' => '2023-11-10',
                'izin_submit' => 'false'
            ],
        ];

        foreach ($data as $item) {
            Timeline::create($item);
        }
    }
}
