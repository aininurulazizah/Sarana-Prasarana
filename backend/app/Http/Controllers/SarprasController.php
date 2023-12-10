<?php

namespace App\Http\Controllers;

use App\Models\Sarpras;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SarprasController extends Controller
{
    /**
     * Create a new SarprasController instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth:api', ['except' => []]);
    // }

    // Method for handling HTTP GET requests
    public function index()
    {
        $sarpras = Sarpras::all();
        return response()->json($sarpras, 200);
    }

    // Method for handling HTTP GET requests to show a single Sarpras
    public function show($id)
    {
        $sarpras = Sarpras::find($id);
        if (!$sarpras) {
            return response()->json(['message' => 'Sarpras not found'], 404);
        }
        return response()->json($sarpras, 200);
    }

    // Method for handling HTTP POST requests to create a new Sarpras
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama_sarpras' => 'required',
            'deskripsi' => 'required',
            'daya_tampung' => 'required|integer',
            'gambar_sarpras' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // 2048 KB (2 MB) adalah batas ukuran gambar
        ]);
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }
    
        // Menyimpan gambar di sistem penyimpanan file
        $gambarPath = $request->file('gambar_sarpras')->store('public');
    
        // Menyimpan jalur gambar ke dalam kolom gambar_sarpras di basis data
        $sarpras = Sarpras::create([
            'nama_sarpras' => $request->nama_sarpras,
            'deskripsi' => $request->deskripsi,
            'daya_tampung' => $request->daya_tampung,
            'gambar_sarpras' => $gambarPath,
            'link_gambar' => 'http://localhost:8000/storage/' . basename($gambarPath),
            'status_peminjaman' => 'Tersedia'
        ]);
    
        return response()->json($sarpras, 201);
    }
    

    // Method for handling HTTP PUT/PATCH requests to update a Sarpras
    public function update(Request $request, $id)
    {

        $sarpras = Sarpras::find($id);
        if (!$sarpras) {
            return response()->json(['message' => 'Sarpras not found'], 404);
        }

        if ($request->has('nama_sarpras')) {
            $sarpras->nama_sarpras = $request->input('nama_sarpras');
        }

        if ($request->has('deskripsi')) {
            $sarpras->deskripsi = $request->input('deskripsi');
        }

        if ($request->has('daya_tampung')) {
            $sarpras->daya_tampung = $request->input('daya_tampung');
        }

        if ($request->hasFile('gambar_sarpras')) {
            // Hapus nilai yang ada di kolom link_gambar jika ada
            if ($sarpras->gambar_sarpras) {
                $sarpras->link_gambar = null;
                Storage::delete($sarpras->gambar_sarpras);
            }

            // Proses untuk menyimpan dan mengupdate gambar_sarpras
            $gambarPath = $request->file('gambar_sarpras')->store('public');

            // Update jalur gambar di basis data dengan jalur gambar yang baru
            $sarpras->gambar_sarpras = $gambarPath;

            // Set kolom link_gambar dengan URL baru
            $sarpras->link_gambar = 'http://localhost:8000/storage/' . basename($gambarPath);
        }

        $sarpras->save();

        return response()->json($sarpras, 200);
    }

    // Method for handling HTTP DELETE requests to delete a Sarpras
    public function destroy($id)
    {
        $sarpras = Sarpras::find($id);
        if (!$sarpras) {
            return response()->json(['message' => 'Sarpras not found'], 404);
        }

        // Delete associated records (if any)
        // ...

        // Delete Sarpras
        $sarpras->delete();
        return response()->json(['message' => 'Sarpras deleted successfully'], 200);
    }

    public function getAvailable()
    {
        $sarpras = Sarpras::where('status_peminjaman', 'Tersedia')->get();
    
        if ($sarpras->isEmpty()) {
            return response()->json(['message' => 'No available Sarpras found'], 404);
        }
    
        return response()->json($sarpras, 200);
    }
    
    
}
