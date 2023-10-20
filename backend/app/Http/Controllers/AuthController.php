<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller {
    // register a new user method
    public function register(RegisterRequest $request) {
        $data = $request->validated();

        $user = User::create([
            'nama' => $data['nama'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        $cookie = cookie('token', $token, 60 * 24); // 1 day

        return response()->json([
            'user' => new UserResource($user),
        ])->withCookie($cookie);
    }

    // login a user method
    public function login(LoginRequest $request) {
        $credentials = $request->only('email', 'password');

        $email = $credentials['email'];
        $user = User::where('email', $email)->first();
        
        if (Auth::attempt($credentials)) {
            return response()->json(['message' => 'Login successful', 'message' => 'Login successful', 'role' => $user->role]);
        } else {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    }

    // logout a user method
    public function logout(Request $request) {
        Auth::logout(); // Logout pengguna
    
        return response()->json(['message' => 'Logout successful']);
    }

}