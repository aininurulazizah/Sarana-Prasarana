<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAcademicEventsTable extends Migration
{
    public function up()
    {
        Schema::create('academic_events', function (Blueprint $table) {
            $table->id();
            $table->date('tanggal_mulai');
            $table->date('tanggal_akhir');
            $table->string('nama_kegiatan');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('academic_events');
    }
}
