<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pengumuman;

class PengumumanController extends Controller
{
    public function index()
    {
        $pengumuman = Pengumuman::all();
        return response()->json($pengumuman);
    }

    public function show($id)
    {
        $pengumuman = Pengumuman::find($id);
        
        if (!$pengumuman) {
            return response()->json(['message' => 'Pengumuman not found'], 404);
        }

        return response()->json($pengumuman);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'slug' => 'required|unique:pengumuman',
            'judul_konten' => 'required',
            'isi_konten' => 'required',
            'tanggal' => 'date',
        ]);

        $pengumuman = new Pengumuman;
        $pengumuman->slug = $request->slug;
        $pengumuman->judul_konten = $request->judul_konten;
        $pengumuman->isi_konten = $request->isi_konten;
        $pengumuman->gambar = $request->gambar;
        $pengumuman->tanggal = $request->tanggal;
        $pengumuman->save();

        return response()->json($pengumuman, 201);
    }

    public function update(Request $request, $id)
    {
        $pengumuman = Pengumuman::find($id);
        
        if (!$pengumuman) {
            return response()->json(['message' => 'Pengumuman not found'], 404);
        }

        $this->validate($request, [
            'slug' => 'required|unique:pengumuman,slug,' . $id,
            'judul_konten' => 'required',
            'isi_konten' => 'required',
            'tanggal' => 'date',
        ]);

        $pengumuman->slug = $request->slug;
        $pengumuman->judul_konten = $request->judul_konten;
        $pengumuman->isi_konten = $request->isi_konten;
        $pengumuman->gambar = $request->gambar;
        $pengumuman->tanggal = $request->tanggal;
        $pengumuman->save();

        return response()->json($pengumuman);
    }

    public function destroy($id)
    {
        $pengumuman = Pengumuman::find($id);
        
        if (!$pengumuman) {
            return response()->json(['message' => 'Pengumuman not found'], 404);
        }

        $pengumuman->delete();
        return response()->json(['message' => 'Pengumuman deleted'], 200);
    }
}
