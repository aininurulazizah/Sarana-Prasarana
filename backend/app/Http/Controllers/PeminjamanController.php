<?php

namespace App\Http\Controllers;

use App\Models\Peminjaman;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PeminjamanController extends Controller
{
    /**
     * Create a new PeminjamanController instance.
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
        $peminjaman = Peminjaman::all();
        return response()->json($peminjaman, 200);
    }

    // Method for handling HTTP GET requests to show a single Peminjaman
    public function show($id)
    {
        $peminjaman = Peminjaman::find($id);
        if (!$peminjaman) {
            return response()->json(['message' => 'Peminjaman not found'], 404);
        }
        return response()->json($peminjaman, 200);
    }

    // Method for handling HTTP POST requests to create a new Peminjaman
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_proker' => 'required',
            'surat_peminjaman' => 'required',
            'status_peminjaman' => 'required',
            'catatan' => 'nullable',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        // Menyimpan gambar di sistem penyimpanan file
        $suratPath = $request->file('surat_peminjaman')->store('public/surat-pengajuan');

        $peminjaman = Peminjaman::create([
            'id_proker' => $request->id_proker,
            'surat_peminjaman' => $suratPath,
            'link_surat' => 'http://localhost:8000/storage/surat-pengajuan/' . basename($suratPath),
            'status_peminjaman' => $request->status_peminjaman,
            'catatan' => '',
        ]);

        return response()->json($peminjaman, 201);
    }

    // Method for handling HTTP PUT/PATCH requests to update a Peminjaman
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'id_proker' => 'sometimes|required',
            'surat_peminjaman' => 'sometimes|required',
            'status_peminjaman' => 'sometimes|required',
            'catatan' => 'nullable',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $peminjaman = Peminjaman::find($id);
        if (!$peminjaman) {
            return response()->json(['message' => 'Peminjaman not found'], 404);
        }

        if ($request->has('id_proker')) {
            $peminjaman->id_proker = $request->input('id_proker');
        }

        if ($request->has('status_peminjaman')) {
            $peminjaman->status_peminjaman = $request->input('status_peminjaman');
        }

        if ($request->has('catatan')) {
            $peminjaman->catatan = $request->input('catatan');
        }

        if ($request->hasFile('surat_peminjaman')) {
            // Hapus nilai yang ada di kolom link_surat jika ada
            if ($peminjaman->surat_peminjaman) {
                $peminjaman->link_surat = null;
                Storage::delete($peminjaman->surat_peminjaman);
            }

            // Proses untuk menyimpan dan mengupdate gambar_sarpras
            $suratPath = $request->file('surat_peminjaman')->store('public/surat-pengajuan');

            // Update jalur gambar di basis data dengan jalur gambar yang baru
            $peminjaman->surat_peminjaman = $suratPath;

            // Set kolom link_gambar dengan URL baru
            $peminjaman->link_gambar = 'http://localhost:8000/storage/surat-pengajuan' . basename($suratPath);
        }

        $peminjaman->save();

        return response()->json($peminjaman, 200);
    }

    // Method for handling HTTP DELETE requests to delete a Peminjaman
    public function destroy($id)
    {
        $peminjaman = Peminjaman::find($id);
        if (!$peminjaman) {
            return response()->json(['message' => 'Peminjaman not found'], 404);
        }

        // Delete Peminjaman
        $peminjaman->delete();
        return response()->json(['message' => 'Peminjaman deleted successfully'], 200);
    }
}
