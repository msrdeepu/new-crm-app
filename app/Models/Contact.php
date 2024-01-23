<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;
    protected $guarded = [''];

    public function contact_details()
    {
        return $this->hasMany(ContactDetails::class, 'contactId', 'id');
    }
}
