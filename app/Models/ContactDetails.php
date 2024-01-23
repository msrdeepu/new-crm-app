<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactDetails extends Model
{
    use HasFactory;
    protected $fillabel = ['ctype'];

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }
}
