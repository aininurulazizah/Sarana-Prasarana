<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Timeline extends Model
{
    protected $table = 'timeline'; // Nama tabel database yang sesuai

    protected $fillable = [
        'id_kegiatan',
        'nama_kegiatan',
        'tanggal_mulai',
        'tanggal_selesai',
        'izin_submit',
    ];

    // Contoh metode untuk mengambil data timeline berdasarkan tanggal mulai
    public function scopeByTanggalMulai($query, $tanggalMulai)
    {
        return $query->where('tanggal_mulai', $tanggalMulai);
    }
}
