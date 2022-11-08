<?php

namespace App\Models;
use App\Models\promotion;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class apprenant extends Model
{
    protected $table = 'apprenant';

    // one to one , one to many
    public function promotion(){
        return $this->belongsTo(promotion::class);
    }

    // many to many

    public function promotions(){
    return $this->belongsToMany(promotion::class);
    }

}
