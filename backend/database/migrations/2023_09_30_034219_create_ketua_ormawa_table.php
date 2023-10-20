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
        Schema::create('ketua_ormawa', function (Blueprint $table) {
            $table->id('id_ketua');
            $table->string('nim_ketua');
            $table->string('nama_ketua');
            $table->string('tahun_jabatan');
            $table->string('email_ketua')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->bigInteger('id_pengguna');
            $table->bigInteger('id_ormawa');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ketua_ormawa');
    }
};
