<?php

namespace App\Http\Controllers;

use App\Models\Latihan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LatihanController extends Controller
{
    //
    public function index()
    {
        $latihan = Latihan::all();
        return Inertia::render('Latihan/Index', [
            'latihan' => $latihan
        ]);
        //tipe di atas untuk declare manual array -> 'latihan' harus sesuai dengan nama array pada halaman yg akan di tampilkan

        //return Inertia::render('Latihan/Index', compact('latihan')); => compact otomatis membuat array

        //return Inertia::render('Latihan/Index');
    }

    public function Add()
    {
        return Inertia::render('Latihan/Add');
    }

    public function tambah(Request $request)
    {
        $request->validate([
            'nama' => 'required|string',
            'deskripsi' => 'nullable|string'
        ]);

        Latihan::create($request->all());
        return redirect()->route('Latihan-index')->with('message', 'Data berhasil di simpan!');
    }
    //datalatihan di controller sama dengan route
    public function Hapus(Latihan $datalatihan)
    {
        $datalatihan->delete();
        return redirect()->route('Latihan-index')->with('message', 'Data berhasil di hapus!');
    }

    public function Ubah(Latihan $dataupdate)
    {
        return Inertia::render('Latihan/halaman-ubah', compact('dataupdate'));
        //return redirect()->route('Latihan/halaman-ubah', compact('dataupdate'));
    }
}
