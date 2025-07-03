<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Latihan extends Model
{
    //untuk memanggil spesifik tabel perlu di decalre nama tabel
    protected $table = 'latihan';
    protected $fillable = ['nama', 'deskripsi'];
}
