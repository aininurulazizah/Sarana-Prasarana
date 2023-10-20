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
        Schema::create('sarpras', function (Blueprint $table) {
            $table->id('id_sarpras');
            $table->string('nama_sarpras');
            $table->longText('deskripsi');
            $table->integer('daya_tampung');
            $table->string('gambar_sarpras')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sarpras');
    }
};
