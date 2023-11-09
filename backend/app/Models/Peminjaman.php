<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peminjaman extends Model
{
    use HasFactory;

    protected $table = 'peminjaman';
    protected $primaryKey = 'id_peminjaman';
    protected $fillable = [
        'surat_peminjaman',
        'status_peminjaman',
        'catatan'
    ];

    public function detailPeminjaman()
    {
        return $this->hasMany('App\Models\DetailPeminjaman', 'id_peminjaman');
    }
}
