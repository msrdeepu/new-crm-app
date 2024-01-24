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
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->text('contactid');
            $table->string('contype')->nullable();
            $table->text('title')->nullable();
            $table->text('fullname');
            $table->text('designation')->nullable();
            $table->string('company')->nullable();
            $table->string('companycode')->nullable();
            $table->text('pannumber')->nullable();
            $table->text('gstnumber')->nullable();
            $table->bigInteger('phone')->nullable();
            $table->bigInteger('mobilenum')->nullable();
            $table->bigInteger('altcontact')->nullable();
            $table->bigInteger('wpnumber')->nullable();
            $table->text('emailid')->nullable();
            $table->text('altemailid')->nullable();
            $table->text('weburl')->nullable();
            $table->text('city')->nullable();
            $table->text('country')->nullable();
            $table->text('billaddress')->nullable();
            $table->text('avatar')->nullable();
            $table->text('status')->nullable();
            $table->text('houseaddress')->nullable();
            $table->text('officeaddress')->nullable();
            $table->text('perminantaddress')->nullable();
            $table->text('bankdetails')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
