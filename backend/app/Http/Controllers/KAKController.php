<?php

namespace App\Http\Controllers;

use App\Models\KAK;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class KAKController extends Controller
{
    // Method for handling HTTP GET requests
    public function index()
    {
        $kaks = KAK::all();
        return response()->json($kaks, 200);
    }

    // Method for handling HTTP GET requests to show a single product
    public function show($id)
    {
        $kaks = KAK::find();
        if (!$kaks) {
            return response()->json(['message' => 'KAK not found'], 404);
        }
        return response()->json($kaks, 200);
    }

    // Method for handling HTTP POST requests to create a new product
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_kak' => 'required',
            'id_ormawa' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $kak = KAK::create($request->all());
        return response()->json($kak, 201);
    }

    // Method for handling HTTP PUT/PATCH requests to update a product
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'id_kak' => 'required',
            'id_ormawa' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }
        $kak = KAK::find($id);
        if (!$kak) {
            return response()->json(['message' => 'KAK not found'], 404);
        }
        $kak->update($request->all());
        return response()->json($kak, 200);
    }

    // Method for handling HTTP DELETE requests to delete a product
    public function destroy($id)
    {
        $kak = KAK::find($id);
        if (!$kak) {
            return response()->json(['message' => 'KAK not found'], 404);
        }
        $kak->delete();
        return response()->json(['message' => 'KAK deleted'], 200);
    }    
}
