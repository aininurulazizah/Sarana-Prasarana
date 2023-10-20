<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Timeline;

class TimelineController extends Controller
{
    public function index()
    {
        $timeline = Timeline::all();
        return response()->json($timeline);
    }

    public function show($id)
    {
        $timeline = Timeline::find($id);

        if (!$timeline) {
            return response()->json(['message' => 'Timeline not found'], 404);
        }

        return response()->json($timeline);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'id_kegiatan' => 'required',
            'nama_kegiatan' => 'required',
            'tanggal_mulai' => 'required|date',
            'tanggal_selesai' => 'required|date',
            'izin_submit' => 'required',
        ]);

        $timeline = new Timeline;
        $timeline->id_kegiatan = $request->id_kegiatan;
        $timeline->nama_kegiatan = $request->nama_kegiatan;
        $timeline->tanggal_mulai = $request->tanggal_mulai;
        $timeline->tanggal_selesai = $request->tanggal_selesai;
        $timeline->izin_submit = $request->izin_submit;
        $timeline->save();

        return response()->json($timeline, 201);
    }

    public function update(Request $request, $id)
    {
        $timeline = Timeline::find($id);

        if (!$timeline) {
            return response()->json(['message' => 'Timeline not found'], 404);
        }

        $this->validate($request, [
            'id_kegiatan' => 'required',
            'nama_kegiatan' => 'required',
            'tanggal_mulai' => 'required|date',
            'tanggal_selesai' => 'required|date',
            'izin_submit' => 'required',
        ]);

        $timeline->id_kegiatan = $request->id_kegiatan;
        $timeline->nama_kegiatan = $request->nama_kegiatan;
        $timeline->tanggal_mulai = $request->tanggal_mulai;
        $timeline->tanggal_selesai = $request->tanggal_selesai;
        $timeline->izin_submit = $request->izin_submit;
        $timeline->save();

        return response()->json($timeline);
    }


    public function destroy($id)
    {
        $timeline = Timeline::find($id);

        if (!$timeline) {
            return response()->json(['message' => 'Timeline not found'], 404);
        }

        $timeline->delete();
        return response()->json(['message' => 'Timeline deleted'], 200);
    }
}
