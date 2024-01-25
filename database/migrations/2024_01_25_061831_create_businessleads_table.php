<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 
     */


    public function up(): void
    {
        Schema::create('businessleads', function (Blueprint $table) {
            $table->id();
            $table->text('leadId');
            $table->string('title')->nullable();
            $table->string('leadowner')->nullable();
            $table->string('leadmanager')->nullable();
            $table->string('leadsource')->nullable();
            $table->string('status')->nullable();
            $table->string('industry')->nullable();
            $table->text('rating')->nullable();
            $table->text('contactdate')->nullable();
            $table->bigInteger('annualrevenue')->nullable();
            $table->text('details')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('businessleads');
    }
};
