<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    // contactid: contid,
    //     ptitle: "",
    //     pstatus: "",
    //     ppriority: "",
    //     ptype: "",
    //     pcustomer: "",
    //     assignto: "",
    //     pphase: "",
    //     pbudget: "",
    //     stdate: "",
    //     duedate: "",
    //     details: "",
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->text('projectid');
            $table->string('ptitle')->nullable();
            $table->string('pstatus')->nullable();
            $table->string('ppriority')->nullable();
            $table->string('ptype')->nullable();
            $table->string('pcustomer')->nullable();
            $table->string('assignto')->nullable();
            $table->string('pphase')->nullable();
            $table->bigInteger('pbudget')->nullable();
            $table->text('stdate')->nullable();
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
        Schema::dropIfExists('projects');
    }
};
