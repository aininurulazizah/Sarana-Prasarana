<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KetuaOrmawa;
use App\Models\User;

class KetuaOrmawaController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    // public function __construct() {
    //     $this->middleware('auth:api', ['except' => ['login', 'register']]);
    // }

    /**
     * Get ketua ormawa
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $ketuaOrmawa = KetuaOrmawa::all();
        return response()->json(['data' => $ketuaOrmawa], 200);
    }

    /**
     * Get by id
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $ketuaOrmawa = KetuaOrmawa::find($id);

        if (!$ketuaOrmawa) {
            return response()->json(['message' => 'Data not found'], 404);
        }

        return response()->json(['data' => $ketuaOrmawa], 200);
    }

    /**
     * Store
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $ketuaOrmawa = KetuaOrmawa::create($request->all());
        return response()->json($ketuaOrmawa, 201);
    }

    /**
     * Update
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $ketua = KetuaOrmawa::find($id);

        if (!$ketua) {
            return response()->json(['message' => 'Data not found'], 404);
        }

        $ketua->nama_ketua = $request->input('nama_ketua');
        // Update properti lainnya sesuai kebutuhan

        $ketua->save();

        return response()->json(['message' => 'Data updated successfully'], 200);
    }

    /**
     * Delete
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $ketuaOrmawa = KetuaOrmawa::find($id);

        if (!$ketuaOrmawa) {
            return response()->json(['message' => 'Data not found'], 404);
        }

        $ketuaOrmawa->delete();

        return response()->json(['message' => 'Data deleted successfully'], 204);
    }

    public function getUser($id)
    {
        $User = User::find($id);

        if (!$User) {
            return response()->json(['message' => 'Data not found'], 404);
        }

        return response()->json(['data' => $User], 200);
    }

    /**
     * Get ketua ormawa by user id
     *
     * @param  int  $id_pengguna
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByUserId($id_pengguna)
    {
        $ketuaOrmawa = KetuaOrmawa::where('id_pengguna', $id_pengguna)->first();

        if (!$ketuaOrmawa) {
            return response()->json(['message' => 'Data not found'], 404);
        }

        return response()->json(['data' => $ketuaOrmawa], 200);
    }


}
