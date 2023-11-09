<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('proker', function (Blueprint $table) {
            $table->id('id_proker');
            $table->bigInteger('id_kak');
            $table->string('nama_kegiatan');
            $table->string('ketua_pelaksana');
            $table->longText('deskripsi_kegiatan');
            $table->date('tanggal_mulai')->nullable();
            $table->date('tanggal_akhir')->nullable();
            $table->string('status')->nullable();
            $table->longText('catatan')->nullable();
            $table->string('file_proposal')->nullable();
            $table->string('file_rab')->nullable();
            $table->string('izin_submit');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proker');
    }
};
