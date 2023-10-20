<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Pengumuman;

class PengumumanSeeder extends Seeder
{
    public function run()
    {
        $data = [
            [
                'slug' => 'pengumuman-1',
                'judul_konten' => 'Pengumuman Pertama',
                'isi_konten' => 'Ini adalah pengumuman pertama.',
                'gambar' => 'gambar1.jpg',
                'tanggal' => '2023-10-25',
            ],
            [
                'slug' => 'pengumuman-2',
                'judul_konten' => 'Pengumuman Kedua',
                'isi_konten' => 'Ini adalah pengumuman kedua.',
                'gambar' => 'gambar2.jpg',
                'tanggal' => '2023-11-15',
            ],
        ];

        foreach ($data as $item) {
            Pengumuman::create($item);
        }
    }
}
