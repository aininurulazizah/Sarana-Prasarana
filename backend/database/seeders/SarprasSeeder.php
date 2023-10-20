<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SarprasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $sarpras = [
            [
                'nama_sarpras' => 'Gedung H : Lab AI',
                'deskripsi' => 'Lab AI Gedung H merupakan Lab yang berada pada lantai 5 Gedung H',
                'daya_tampung' => 50,
                'gambar' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_sarpras' => 'Gedung H : Lab TI',
                'deskripsi' => 'Lab TI Gedung H merupakan Lab yang berada pada lantai 5 Gedung H. Berada di sebrang Lab AI',
                'daya_tampung' => 50,
                'gambar' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama_sarpras' => 'Pendopo Tonny Soewandito',
                'deskripsi' => 'Gedung Pendopo Tonny Soewandito merupakan gedung serbaguna yang dapat digunakan untuk kegiatan mahasiswa ataupun dosen dan karyawan POLBAN',
                'daya_tampung' => 1000,
                'gambar' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ];

    }
}
