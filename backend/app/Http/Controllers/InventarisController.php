<?php

namespace App\Http\Controllers;

use App\Models\Inventaris;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class InventarisController extends Controller
{
    // Method for handling HTTP GET requests
    public function index()
    {
        $inventaris = Inventaris::all();
        return response()->json($inventaris, 200);
    }

    // Method for handling HTTP GET requests to show a single Inventaris
    public function show($id)
    {
        $inventaris = Inventaris::find($id);
        if (!$inventaris) {
            return response()->json(['message' => 'Inventaris not found'], 404);
        }
        return response()->json($inventaris, 200);
    }

    // Method for handling HTTP GET requests to get inventaris by Sarpras ID
    public function getBySarpras($sarprasId)
    {
        $inventaris = Inventaris::where('id_sarpras', $sarprasId)->get();
        return response()->json($inventaris, 200);
    }

    // Method for handling HTTP POST requests to create a new Inventaris
    public function store(Request $request, $id_sarpras)
    {
        $validator = Validator::make($request->all(), [
            'nama_inventaris' => 'required',
            'deskripsi' => 'required',
            'ketersediaan' => 'required|integer'
        ]);
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }
    
        // Membuat objek inventaris baru dengan data dari formulir
        $inventaris = new inventaris();
        $inventaris->id_sarpras = $id_sarpras;
        $inventaris->nama_inventaris = $request->input('nama_inventaris');
        $inventaris->deskripsi = $request->input('deskripsi');
        $inventaris->ketersediaan = $request->input('ketersediaan');

        // Menyimpan objek inventaris ke dalam database
        $inventaris->save();
    
        return response()->json($inventaris, 201);
    }
    

    // Method for handling HTTP PUT/PATCH requests to update an Inventaris
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nama_inventaris' => 'sometimes|required',
            'deskripsi' => 'sometimes|required',
            'ketersediaan' => 'sometimes|required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $inventaris = Inventaris::find($id);
        if (!$inventaris) {
            return response()->json(['message' => 'Inventaris not found'], 404);
        }

        if ($request->has('nama_inventaris')) {
            $inventaris->nama_inventaris = $request->input('nama_inventaris');
        }

        if ($request->has('deskripsi')) {
            $inventaris->deskripsi = $request->input('deskripsi');
        }

        if ($request->has('ketersediaan')) {
            $inventaris->ketersediaan = $request->input('ketersediaan');
        }

        $inventaris->save();

        return response()->json($inventaris, 200);
    }

    // Method for handling HTTP DELETE requests to delete an Inventaris
    public function destroy($id)
    {
        $inventaris = Inventaris::find($id);
        if (!$inventaris) {
            return response()->json(['message' => 'Inventaris not found'], 404);
        }

        // Delete Inventaris
        $inventaris->delete();
        return response()->json(['message' => 'Inventaris deleted successfully'], 200);
    }
}
