<?php

namespace App\Http\Controllers;

use App\Models\LPJ;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LPJController extends Controller
{
    // Method for handling HTTP GET requests
    public function index()
    {
        $lpjs = LPJ::all();
        return response()->json($lpjs, 200);
    }

    // Method for handling HTTP GET requests to show a single product
    public function show($id)
    {
        $lpjs = LPJ::find();
        if (!$lpjs) {
            return response()->json(['message' => 'LPJ not found'], 404);
        }
        return response()->json($lpjs, 200);
    }

    // Method for handling HTTP POST requests to create a new product
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_lpj' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $lpj = LPJ::create($request->all());
        return response()->json($lpj, 201);
    }

    // Method for handling HTTP PUT/PATCH requests to update a product
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [// Your logic for updating a product with the given ID based on the request data
            'id_lpj' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }
        $lpj = LPJ::find($id);
        if (!$lpj) {
            return response()->json(['message' => 'LPJ not found'], 404);
        }
        $lpj->update($request->all());
        return response()->json($lpj, 201);
    }

    // Method for handling HTTP DELETE requests to delete a product
    public function destroy($id)
    {
        $lpj = LPJ::find($id);
        if (!$lpj) {
            return response()->json(['message' => 'LPJ not found'], 404);
        }
        $lpj->delete();
        return response()->json(['message' => 'LPJ deleted successfully'], 200);
    }
}
