<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailPeminjaman extends Model
{
    use HasFactory;

    protected $table = 'detail_peminjaman';
    protected $primaryKey = 'id_detail';
    protected $fillable = [
        'id_peminjaman',
        'jenis_peminjaman',
        'id_sarpras',
        'id_inventaris',
        'waktu_mulai',
        'waktu_selesai'
    ];

    public function sarpras()
    {
        return $this->belongsTo('App\Models\Sarpras', 'id_sarpras');
    }

    public function inventaris()
    {
        return $this->belongsTo('App\Models\Inventaris', 'id_inventaris');
    }

    public function peminjaman()
    {
        return $this->belongsTo('App\Models\Peminjaman', 'id_peminjaman');
    }
}
