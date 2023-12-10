<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Proker extends Model
{
    protected $table = 'proker';
    protected $primaryKey = 'id_proker';
    public $incrementing = true;
    public $timestamps = true;
    public $fillable = [
        'id_kak',
        'nama_kegiatan',
        'ketua_pelaksana',
        'deskripsi_kegiatan',
        'tanggal_mulai',
        'tanggal_akhir',
        'status',
        'catatan',
        'file_proposal',
        'file_rab',
        'izin_submit',
        'jenis_kegiatan',
        'izin_submit',
        'jenis_kegiatan',
    ];

    public function kak(){
        return $this->belongsTo(KAK::class, 'id_kak');
    }
}
