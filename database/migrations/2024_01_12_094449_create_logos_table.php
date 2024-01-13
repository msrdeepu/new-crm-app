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
        Schema::create('logos', function (Blueprint $table) {
            $table->id();
            $table->text('logoId');
            $table ->text('logoFile')->nullable();
            $table ->text('logoPosition')->nullable();
            $table ->bigInteger('logoHeight')->nullable();
            $table ->bigInteger('logoWidth')->nullable();
            $table ->bigInteger('logoMargin')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('logos');
    }
};
