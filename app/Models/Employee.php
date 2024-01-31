<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Employee extends Model
{
    use HasFactory;
    protected $fillable = ['contact_id'];

    protected $guarded = [''];

    public function contact()
    {
        return $this->belongsTo(Contact::class, 'contact_id');
    }
}
