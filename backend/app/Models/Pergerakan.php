<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pergerakan extends Model
{
    protected $table = 'pergerakan'; // Nama tabel database yang sesuai

    protected $fillable = [
        'id_proker',
        'deskripsi_kegiatan',
        'nama_pergerakan',
    ];

    // Tambahkan properti-properitas atau metode-metode tambahan sesuai kebutuhan

    // Contoh metode untuk mengambil data pergerakan berdasarkan id_proker
    public function scopeByProker($query, $id_proker)
    {
        return $query->where('id_proker', $id_proker);
    }
}
