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
        Schema::create('Leadactivities', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('leadid');
            $table->string('title');
            $table->string('status')->nullable();
            $table->string('rating')->nullable();
            $table->text('details')->nullable();
            $table->text('remind')->nullable();
            $table->text('stdate')->nullable();
            $table->text('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leads_activity');
    }
};
