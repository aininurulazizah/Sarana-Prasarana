<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pergerakan;

class PergerakanController extends Controller
{
    public function index()
    {
        $pergerakan = Pergerakan::all();
        return response()->json($pergerakan);
    }

    public function show($id)
    {
        $pergerakan = Pergerakan::find($id);

        if (!$pergerakan) {
            return response()->json(['message' => 'Pergerakan not found'], 404);
        }

        return response()->json($pergerakan);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'id_proker' => 'required',
            'deskripsi_kegiatan' => 'required',
            'nama_pergerakan' => 'required',
        ]);

        $pergerakan = new Pergerakan;
        $pergerakan->id_proker = $request->id_proker;
        $pergerakan->deskripsi_kegiatan = $request->deskripsi_kegiatan;
        $pergerakan->nama_pergerakan = $request->nama_pergerakan;
        $pergerakan->save();

        return response()->json($pergerakan, 201);
    }

    public function update(Request $request, $id)
    {
        $pergerakan = Pergerakan::find($id);

        if (!$pergerakan) {
            return response()->json(['message' => 'Pergerakan not found'], 404);
        }

        $this->validate($request, [
            'id_proker' => 'required',
            'deskripsi_kegiatan' => 'required',
            'nama_pergerakan' => 'required',
        ]);

        $pergerakan->id_proker = $request->id_proker;
        $pergerakan->deskripsi_kegiatan = $request->deskripsi_kegiatan;
        $pergerakan->nama_pergerakan = $request->nama_pergerakan;
        $pergerakan->save();

        return response()->json($pergerakan);
    }

    public function destroy($id)
    {
        $pergerakan = Pergerakan::find($id);

        if (!$pergerakan) {
            return response()->json(['message' => 'Pergerakan not found'], 404);
        }

        $pergerakan->delete();
        return response()->json(['message' => 'Pergerakan deleted'], 200);
    }
}
