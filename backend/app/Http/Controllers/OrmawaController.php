<?php

namespace App\Http\Controllers;

use App\Models\Ormawa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrmawaController extends Controller
{
    public function index()
    {
        $ormawas = Ormawa::all();
        return response()->json($ormawas, 200);
    }

    public function show($id)
    {
        $ormawa = Ormawa::find($id);

        if (!$ormawa) {
            return response()->json(['message' => 'Ormawa not found'], 404);
        }

        return response()->json($ormawa, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama_ormawa' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $ormawa = Ormawa::create($request->all());

        return response()->json($ormawa, 201);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nama_ormawa' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $ormawa = Ormawa::find($id);

        if (!$ormawa) {
            return response()->json(['message' => 'Ormawa not found'], 404);
        }

        $ormawa->update($request->all());

        return response()->json($ormawa, 200);
    }

    public function destroy($id)
    {
        $ormawa = Ormawa::find($id);

        if (!$ormawa) {
            return response()->json(['message' => 'Ormawa not found'], 404);
        }

        $ormawa->delete();

        return response()->json(['message' => 'Ormawa deleted'], 200);
    }
}