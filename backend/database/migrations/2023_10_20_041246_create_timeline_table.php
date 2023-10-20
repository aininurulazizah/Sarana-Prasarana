<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimelineTable extends Migration
{
    public function up()
    {
        Schema::create('timeline', function (Blueprint $table) {
            $table->id('id_timeline');
            $table->string('id_kegiatan');
            $table->string('nama_kegiatan');
            $table->date('tanggal_mulai');
            $table->date('tanggal_selesai');
            $table->string('izin_submit');
            $table->timestamps();

        });
    }

    public function down()
    {
        Schema::dropIfExists('timeline');
    }
}