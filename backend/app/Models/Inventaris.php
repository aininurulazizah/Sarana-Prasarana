<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventaris extends Model
{
    use HasFactory;

    protected $table = 'inventaris';
    protected $primaryKey = 'id_inventaris';
    protected $fillable = [
        'nama_inventaris',
        'deskripsi',
        'ketersediaan',
    ];

    public function sarpras()
    {
        return $this->belongsTo('App\Models\Sarpras', 'id_sarpras');
    }

    public function detailPeminjaman()
    {
        return $this->hasMany('App\Models\DetailPeminjaman', 'id_inventaris');
    }
}
