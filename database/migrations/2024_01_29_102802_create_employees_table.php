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
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('empId');
            $table->foreign('empId')->references('id')->on('contacts')->onDelete('cascade');
            $table->text('dob')->nullable();
            $table->string('marstatus')->nullable();
            $table->string('bloodgroup')->nullable();
            $table->string('physicchallenged')->nullable();
            $table->string('nationality')->nullable();
            $table->text('passportno')->nullable();
            $table->text('joindate')->nullable();
            $table->text('probationenddate')->nullable();
            $table->string('department')->nullable();
            $table->string('role')->nullable();
            $table->string('reportingto')->nullable();
            $table->string('prevworkexp')->nullable();
            $table->string('salarymode')->nullable();
            $table->bigInteger('salary')->nullable();
            $table->string('currentstatus')->nullable();
            $table->text('resignedon')->nullable();
            $table->text('resignationreason')->nullable();
            $table->text('emergperson')->nullable();
            $table->string('personrelation')->nullable();
            $table->bigInteger('emergcontact')->nullable();
            $table->text('insurenceno')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
