<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AcademicEvent;

class AcademicEventController extends Controller
{
    public function index()
    {
        $events = AcademicEvent::all();
        return response()->json($events);
    }

    public function show($id)
    {
        $event = AcademicEvent::find($id);
        if (!$event) {
            return response()->json(['message' => 'Kegiatan tidak ditemukan'], 404);
        }
        return response()->json($event);
    }

    public function store(Request $request)
    {
        $event = new AcademicEvent;
        $event->tanggal_mulai = $request->tanggal_mulai;
        $event->tanggal_akhir = $request->tanggal_akhir;
        $event->nama_kegiatan = $request->nama_kegiatan;
        $event->save();
        return response()->json($event, 201);
    }
    
    public function update(Request $request, $id)
    {
        $event = AcademicEvent::find($id);
        if (!$event) {
            return response()->json(['message' => 'Kegiatan tidak ditemukan'], 404);
        }
        $event->update($request->all());
        return response()->json($event, 200);
    }

    public function destroy($id)
    {
        $event = AcademicEvent::find($id);
        if (!$event) {
            return response()->json(['message' => 'Kegiatan tidak ditemukan'], 404);
        }
        $event->delete();
        return response()->json(['message' => 'Kegiatan berhasil dihapus'], 204);
    }
}
