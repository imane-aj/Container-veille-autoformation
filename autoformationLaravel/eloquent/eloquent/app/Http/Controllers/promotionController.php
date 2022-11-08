<?php

namespace App\Http\Controllers;

use App\Models\promotion;
use App\Models\apprenant;
use Illuminate\Http\Request;

class promotionController extends Controller
{
    //  one to one
    public function hasOne()
    {

        $data = promotion::find(1)->HasOneapprenant;
        return $data ;
    }

      //  one to many
      public function hasMany()
      {
          $data = promotion::find(1)->HasManyapprenant ;
          return $data ;
      }

      //belongsto

    public function belongsTo()
    {
        $data = apprenant::find(1);
        return $data->promotion;
    }

    public function ManyToMany(){

          $user = promotion::find(2)->apprenant;
          return $user;
    }
}
