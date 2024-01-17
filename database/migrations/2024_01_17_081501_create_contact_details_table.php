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
        Schema::create('contact_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('contact_id')
                  ->constrained(table: 'contacts', indexName: 'contactid')
                  ->onUpdate('cascade')
                  ->onDelete('cascade');
            $table->biginteger('title')->nullable();
            $table->text('pan')->nullable();
            $table->text('gst')->nullable();
            $table->bigInteger('phone')->nullable();
            $table->bigInteger('mobile')->nullable();
            $table->bigInteger('altcontact')->nullable();
            $table->bigInteger('whatsapp')->nullable();
            $table->text('email')->nullable();
            $table->text('altemail')->nullable();
            $table->text('website')->nullable();
            $table->text('city')->nullable();
            $table->text('country')->nullable();
            $table->text('houseadd')->nullable();
            $table->text('offadd')->nullable();
            $table->text('peradd')->nullable();
            $table->text('billadd')->nullable();
            $table->text('avatar')->nullable();
            $table->text('addedon')->nullable();
            $table->text('status')->nullable();
            $table->text('bankaccount')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_details');
    }
};
