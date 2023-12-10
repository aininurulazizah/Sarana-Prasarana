<?php

namespace App\Http\Controllers;

use App\Models\DetailPeminjaman;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DetailPeminjamanController extends Controller
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
        $detail_peminjaman = DetailPeminjaman::all();
        return response()->json($detail_peminjaman, 200);
    }

    // Method for handling HTTP GET requests to show a single Sarpras
    public function show($id)
    {
        $detail_peminjaman = DetailPeminjaman::find($id);
        if (!$detail_peminjaman) {
            return response()->json(['message' => 'Detail Peminjaman not found'], 404);
        }
        return response()->json($detail_peminjaman, 200);
    }

    // Method for handling HTTP POST requests to create a new Sarpras
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_peminjaman' => 'required'
        ]);
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $jenis_peminjaman = null;

        if (!is_null($request->id_sarpras)) {
            $jenis_peminjaman = 'sarpras';
        } elseif (!is_null($request->id_inventaris)) {
            $jenis_peminjaman = 'inventaris';
        }
    
        // Menyimpan jalur gambar ke dalam kolom gambar_sarpras di basis data
        $detail_peminjaman = DetailPeminjaman::create([
            'id_peminjaman' => $request->id_peminjaman,
            'jenis_peminjaman' => $jenis_peminjaman,
            'id_sarpras' => $request->id_sarpras,
            'id_inventaris' => $request->id_inventaris,
            'waktu_mulai' => $request->waktu_mulai,
            'waktu_selesai' => $request->waktu_selesai
        ]);
    
        return response()->json($detail_peminjaman, 201);
    }
    

    // Method for handling HTTP PUT/PATCH requests to update a Sarpras
    public function update(Request $request, $id)
    {

        $detail_peminjaman = DetailPeminjaman::find($id);
        if (!$detail_peminjaman) {
            return response()->json(['message' => 'Detail peminjaman not found'], 404);
        }

        if ($request->has('id_peminjaman')) {
            $detail_peminjaman->id_peminjaman = $request->input('id_peminjaman');
        }

        if ($request->has('jenis_peminjaman')) {
            $detail_peminjaman->jenis_peminjaman = $request->input('jenis_peminjaman');
        }

        if ($request->has('id_sarpras')) {
            $detail_peminjaman->id_sarpras = $request->input('id_sarpras');
        }

        if ($request->has('id_inventaris')) {
            $detail_peminjaman->id_inventaris = $request->input('id_inventaris');
        }

        if ($request->has('waktu_mulai')) {
            $detail_peminjaman->waktu_mulai = $request->input('waktu_mulai');
        }

        if ($request->has('waktu_selesai')) {
            $detail_peminjaman->waktu_selesai = $request->input('waktu_selsai');
        }

        $detail_peminjaman->save();

        return response()->json($detail_peminjaman, 200);
    }

    // Method for handling HTTP DELETE requests to delete a Sarpras
    public function destroy($id)
    {
        $detail_peminjaman = DetailPeminjaman::find($id);
        if (!$detail_peminjaman) {
            return response()->json(['message' => 'Detail Peminjaman not found'], 404);
        }

        // Delete associated records (if any)
        // ...

        // Delete Sarpras
        $detail_peminjaman->delete();
        return response()->json(['message' => 'Detail Peminjaman deleted successfully'], 200);
    }

    public function getByPeminjaman($id)
    {
        $detail_peminjaman = DetailPeminjaman::where('id_peminjaman', $id)->get();
        return response()->json($detail_peminjaman, 200);
    }
    
    
}
