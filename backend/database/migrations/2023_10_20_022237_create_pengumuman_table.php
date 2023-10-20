<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePengumumanTable extends Migration
{
    public function up()
    {
        Schema::create('pengumuman', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('judul_konten');
            $table->text('isi_konten');
            $table->string('gambar')->nullable();
            $table->date('tanggal');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('pengumuman');
    }
}
