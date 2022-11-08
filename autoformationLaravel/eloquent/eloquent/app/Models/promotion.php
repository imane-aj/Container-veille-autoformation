<?php

namespace App\Models;
use App\Models\apprenant;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class promotion extends Model
{
  protected $table = 'promotion';
 
      // one to one
      function HasOneapprenant(){
        return $this->hasOne(apprenant::class);
      }

      // one to many
      function HasManyapprenant(){
        return $this->hasMany(apprenant::class);
      }

      // many to many
      public function apprenant(){
        return $this->belongsToMany(apprenant::class);
      }
}
