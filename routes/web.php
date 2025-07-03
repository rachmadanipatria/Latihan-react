<?php

use App\Http\Controllers\LatihanController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function Pest\Laravel\post;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/Latihan', [LatihanController::class, 'index'])->name('Latihan-index');
    Route::post('/Latihan', [LatihanController::class, 'tambah'])->name('Latihan-tambah');
    Route::get('/Latihan/Add', [LatihanController::class, 'Add'])->name('Add-data');
    Route::get('/Latihan/{dataupdate}/Ubah', [LatihanController::class, 'Ubah'])->name('Ubah-data');
    Route::delete('/Latihan/{datalatihan}', [LatihanController::class, 'Hapus'])->name('Hapus-data');
    //datalatihan pada route delete sama dengan datalatihan di controller untuk mengambil id 
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
