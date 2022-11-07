<?php

namespace App\Http\Controllers;
use App\Models\promotion;

use Illuminate\Http\Request;

class PromotionController extends Controller
{

// one to one

public function hasOne(){

    $data = promotion::find(1)->oneApprenant;

    return $data;
}


}

