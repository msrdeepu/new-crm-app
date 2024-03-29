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
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->text('taskId');
            $table->string('type')->nullable();
            $table->string('name')->nullable();
            $table->string('status')->nullable();
            $table->string('priority')->nullable();
            $table->string('category')->nullable();
            $table->string('assigned')->nullable();
            $table->string('delegated')->nullable();
            $table->text('sdate')->nullable();
            $table->text('duedate')->nullable();
            $table->text('details')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
