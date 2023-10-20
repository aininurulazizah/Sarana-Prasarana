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
        Schema::create('lpj', function (Blueprint $table) {
            $table->id('id_lpj');
            $table->bigInteger('id_proker');
            $table->string('status');
            $table->longText('catatan');
            $table->string('file_lpj')->nulable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kalender_akademik');
    }
};
