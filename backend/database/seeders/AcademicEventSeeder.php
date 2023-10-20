<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AcademicEvent;

class AcademicEventSeeder extends Seeder
{
    public function run()
    {
        // Contoh data kegiatan akademik
        $events = [
            [
                'tanggal_mulai' => '2023-11-15',
                'tanggal_akhir' => '2023-11-20',
                'nama_kegiatan' => 'MARKISA',
            ],
            [
                'tanggal_mulai' => '2023-12-15',
                'tanggal_akhir' => '2023-12-16',
                'nama_kegiatan' => 'Dies Natalis HIMAKOM',
            ],
        ];

        // Memasukkan data kegiatan ke database
        foreach ($events as $event) {
            AcademicEvent::create($event);
        }
    }
}
