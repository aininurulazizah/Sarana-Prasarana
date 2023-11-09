<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KetuaOrmawa extends Model
{
    // use HasFactory;

    protected $table = 'ketua_ormawa';
    protected $primaryKey = 'id_ketua';
    public $incrementing = true;
    public $timestamps = true;
    public $fillable = [
        'nim_ketua',
        'nama_ketua',
        'tahun_jabatan',
        'email_ketua',
        'email_verified_at',
        'id_pengguna',
        'id_ormawa',
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'id_user', 'id_pengguna');
    }

    public function ormawa()
    {
        return $this->hasOne(Ormawa::class, 'id_ormawa', 'id_ormawa');
    }
}
