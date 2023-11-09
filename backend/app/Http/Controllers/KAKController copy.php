<?php

namespace App\Http\Controllers;

use App\Models\KAK;
use App\Models\Proker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class KAKController extends Controller
{
    // Method for handling HTTP GET requests
    public function index($id_kak)
    {
        $kaks = KAK::with('prokers')->where('id_kak', $id_kak)->get();
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
            'id_ketua' => 'required',
            'file_kak' => 'required',
            'file_rab' => 'required',
            'prokers' => 'required|array', // Validate "prokers" as an array
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        // Create the KAK record with specified fields
        $kak = KAK::create([
            'id_ketua' => $request->input('id_ketua'),
            'file_kak' => $request->input('file_kak'),
            'file_rab' => $request->input('file_rab'),
            'status' => 'Diajukan', // Set status to "Diajukan"
            'catatan' => '', // Set catatan to an empty string
        ]);

        // Capture the id_kak from the newly created KAK record
        $id_kak = $kak->id_kak;
        // Insert "proker" records associated with the KAK
        $prokers = [];
        if ($request->has('prokers')) {
            foreach ($request->prokers as $prokerData) {
                // Set the id_kak for each proker to the captured id_kak
                $prokerData['id_kak'] = $id_kak;
                $prokerData['status'] = 'Diajukan'; // Set status in Proker to "Diajukan"
                $prokerData['catatan'] = ''; // Set catatan in Proker to an empty string

                // Create and save the proker record
                $proker = Proker::create($prokerData);

                $prokers[] = $proker;
            }
        }
        return response()->json(['kak' => $kak, 'prokers' => $prokers], 201);
    }
   


    // Belum Jalan
    // Method for handling HTTP PUT/PATCH requests to update a product
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $kak = KAK::find($id);

        if (!$kak) {
            return response()->json(['message' => 'KAK not found'], 404);
        }

        // Update the KAK record
        $kak->update($request->except('prokers'));

        // Update associated proker records
        if ($request->has('prokers')) {
            foreach ($request->prokers as $prokerData) {
                $proker = Proker::find($prokerData['id']);

                if ($proker) {
                    $proker->update($prokerData);
                } else {
                    return response()->json(['message' => 'Proker not found for ID: ' . $prokerData['id']], 404);
                }
            }
        }

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