<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengumuman extends Model
{
    protected $table = 'pengumuman'; // Nama tabel database yang sesuai

    protected $fillable = [
        'slug',
        'judul_konten',
        'isi_konten',
        'gambar',
        'tanggal',
    ];

    // Tambahkan properti-properitas atau metode-metode tambahan sesuai kebutuhan

    // Contoh metode untuk mengambil data pengumuman berdasarkan slug
    public function scopeBySlug($query, $slug)
    {
        return $query->where('slug', $slug);
    }
}
