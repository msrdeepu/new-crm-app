<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    // taskId: record.id,
    //     title: record.title,
    //     started: "",
    //     ended: "",
    //     details: "",
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('taskdurations', function (Blueprint $table) {
            $table->id();
            $table->text('taskId');
            $table->text('taskUniqueId');
            $table->string('title');
            $table->string('started')->nullable();
            $table->string('ended')->nullable();
            $table->text('details')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks_duration');
    }
};
