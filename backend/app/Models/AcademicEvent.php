<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicEvent extends Model
{
    // use HasFactory;

    protected $table = 'academic_events'; // Sesuaikan dengan nama tabel di database

    protected $fillable = [
        'tanggal_mulai', 'tanggal_akhir', 'nama_kegiatan',
    ];

    // Jika Anda ingin menambahkan metode tambahan atau hubungan dengan model lain, Anda dapat melakukannya di sini.
}
