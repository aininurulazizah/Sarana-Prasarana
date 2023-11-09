<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AcademicEventController;
use App\Http\Controllers\PengumumanController;
use App\Http\Controllers\PergerakanController;
use App\Http\Controllers\TimelineController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\OrmawaController;
use App\Http\Controllers\KAKController;
use App\Http\Controllers\ProkerController;
use App\Http\Controllers\LPJController;
use App\Http\Controllers\KetuaOrmawaController;
use Illuminate\Support\Facades\Auth;

use App\Http\Middleware\CheckRole;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
});

// KETUA ORMAWA

Route::group([
    'middleware' => 'api',
    'prefix' => 'ketua-ormawa'
], function () {
    Route::get('/', [KetuaOrmawaController::class, 'index']);
    Route::get('/{id}', [KetuaOrmawaController::class, 'show']);
    Route::post('/', [KetuaOrmawaController::class, 'store']);
    Route::put('/{id}', [KetuaOrmawaController::class, 'update']);
    Route::delete('/{id}', [KetuaOrmawaController::class, 'destroy']);
});

// KALENDER AKADEMIK

// Mengambil semua data kegiatan akademik
Route::get('academic-events', [AcademicEventController::class, 'index']);

// Mengambil data kegiatan akademik berdasarkan ID
Route::get('academic-events/{id}', [AcademicEventController::class, 'show']);

// Menyimpan data kegiatan akademik baru
Route::post('academic-events', [AcademicEventController::class, 'store']);

// Memperbarui data kegiatan akademik berdasarkan ID
Route::put('academic-events/{id}', [AcademicEventController::class, 'update']);

// Menghapus data kegiatan akademik berdasarkan ID
Route::delete('academic-events/{id}', [AcademicEventController::class, 'destroy']);

// PENGUMUMAN

// Mengambil semua data Pengumuman
Route::get('pengumuman', [PengumumanController::class, 'index']);

// Mengambil data Pengumuman berdasarkan ID
Route::get('pengumuman/{id}', [PengumumanController::class, 'show']);

// Menyimpan data Pengumuman baru ke Database
Route::post('pengumuman', [PengumumanController::class, 'store']);

// Memperbarui data Pengumuman berdasarkan ID
Route::put('pengumuman/{id}', [PengumumanController::class, 'update']);

// Menghapus data Pengumuman berdasarkan ID
Route::delete('pengumuman/{id}', [PengumumanController::class, 'destroy']);


// PERGERAKAN

// Mengambil semua data Pergerakan dari Database
Route::get('pergerakan', [PergerakanController::class,'index']);

// Mengambil data Pergerakan dari Database berdasarkan ID
Route::get('pergerakan/{id}', [PergerakanController::class,'show']);

// Menyimpan data Pergerakan ke Database
Route::post('pergerakan', [PergerakanController::class,'store']);

// Memperbarui data Pergerakan berdasarkan ID
Route::put('pergerakan/{id}', [PergerakanController::class,'update']);

// Menghapus data pergerakan berdasarkan ID
Route::delete('pergerakan/{id}', 'PergerakanController@destroy');

Route::get('/test', [TestController::class, 'test']);
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// API routes for Ormawa
Route::get('/ormawa', [OrmawaController::class, 'index']);
Route::get('/ormawa/{id}', [OrmawaController::class, 'show']);
Route::post('/ormawa', [OrmawaController::class, 'store']);
Route::put('/ormawa/{id}', [OrmawaController::class, 'update']);
Route::delete('/ormawa/{id}', [OrmawaController::class, 'destroy']);

// API routes for Kak
Route::group([
    'middleware' => 'api',
    'prefix' => 'kak'
], function () {
    Route::get('/', [KAKController::class, 'index']);
    Route::get('/{id}', [KAKController::class, 'show']);
    Route::post('/', [KAKController::class, 'store']);
    Route::put('/{id}', [KAKController::class, 'update']);
    Route::delete('/{id}', [KAKController::class, 'destroy']);
});

//API routes for Proker
Route::get('/proker', [ProkerController::class, 'index']);
Route::get('/proker/{id}', [ProkerController::class, 'show']);
Route::post('/proker', [ProkerController::class, 'store']);
Route::put('/proker/{id}', [ProkerController::class, 'update']);
Route::delete('/proker/{id}', [ProkerController::class, 'destroy']);

//API routes for LPJ
Route::get('/lpj', [LPJController::class, 'index']);
Route::get('/lpj/{id}', [LPJController::class, 'show']);
Route::post('/lpj', [LPJController::class, 'store']);
Route::put('/lpj/{id}', [LPJController::class, 'update']);
Route::delete('/lpj/{id}', [LPJController::class, 'destroy']);
Route::delete('pergerakan/{id}', [PergerakanController::class,'destroy']);

// TIMELINE

Route::get('timeline', [TimelineController::class,'index']);
Route::get('timeline/{id}', [TimelineController::class,'show']);
Route::post('timeline', [TimelineController::class,'store']);
Route::put('timeline/{id}', [TimelineController::class,'update']);
Route::delete('timeline/{id}', [TimelineController::class,'destroy']);
