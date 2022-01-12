<?php

use App\Models\Company;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/getCompanies', function (Request $request) {
//     $companies = Company::all();
//     return response()->json(['company'=> $companies]);

// });
Route::post('/sendAssignment', function (Request $request) {

    $addQuestion = new Question();
    $addQuestion->zip_code = $request->zipCode;
    $addQuestion->age = $request->age;
    $addQuestion->married_option = 0;
    $addQuestion->vehicles_option = 0;
    $addQuestion->insured_option = 0;
    $addQuestion->home_option = 1;
    $addQuestion->married_option = $request->status['isMarried'] ? 1 : 0;
    $addQuestion->vehicles_option = $request->status['isOwnMultipleVehicles'] ? 1 : 0;
    $addQuestion->insured_option = $request->status['isCurrentlyInsured'] ? 1 : 0;
    $addQuestion->home_option = $request->status['isOwnHome'] ? 1 : 0;
    $addQuestion->save();

    $companies = Company::where('zip_code_max','>',$request->zipCode)->where('zip_code_min','<',$request->zipCode)->get();

    return response()->json([
        'companies'=> $companies
    ]);
});
