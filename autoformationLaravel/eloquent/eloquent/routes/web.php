    <?php

use App\Http\Controllers\promotionController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// One to one
route::get('/hasOne',[promotionController::class,"hasOne"]);

// one to many
route::get('/hasMany',[promotionController::class,'hasMany']);

// belongsto
route::get('/belongsTo',[promotionController::class,'belongsTo']);
// many to many
route::get('/ManyToMany',[promotionController::class,'ManyToMany']);
