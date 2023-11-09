<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;

class TestController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('role:sekumbem', ['except' => ['test']]);
        $this->middleware('auth:api', ['except' => []]);
    }

    public function test(Request $request) {
        $user = auth()->user();
        return response()->json(['message' => 'Halo Admin!', $user->role]);
        // $user = auth()->user();
    
        // if ($user->role === 'admin') {
        //     // Lakukan aksi untuk admin
        //     return response()->json(['message' => 'Halo Admin! ', $user->role]);
        // } else if ($user->role === 'sekumbem') {
        //     // Aksi jika bukan admin
        //     return response()->json(['message' => 'Halo Sekumbem ', $user->role]);
        // }
    }
}
