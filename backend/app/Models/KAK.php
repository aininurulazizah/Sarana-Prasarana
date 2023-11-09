<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KAK extends Model
{
    protected $table = 'kak';
    protected $primaryKey = 'id_kak';
    public $incrementing = true;
    public $timestamps = true;
    public $fillable = [
        'id_ketua',
        'file_kak',
        'file_rab',
        'status',
        'catatan',
    ];

    public function prokers(){
        return $this->hasMany(Proker::class, 'id_kak'); // Assuming 'id_kak' is the foreign key in the Proker model
    }
}
