<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sarpras extends Model
{
    use HasFactory;

    protected $table = 'sarpras';
    protected $primaryKey = 'id_sarpras';
    protected $fillable = [
        'nama_sarpras',
        'deskripsi',
        'daya_tampung',
        'gambar_sarpras'
    ];

    public function inventaris()
    {
        return $this->hasMany('App\Models\Inventaris', 'id_sarpras');
    }

    public function detailPeminjaman()
    {
        return $this->hasMany('App\Models\DetailPeminjaman', 'id_sarpras');
    }
}
