<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ormawa extends Model
{
    protected $table = 'ormawa';
    protected $fillable = ['nama_ormawa'];
    protected $primaryKey = 'id_ormawa';
    public $incrementing = true;
    public $timestamps = true;
}
