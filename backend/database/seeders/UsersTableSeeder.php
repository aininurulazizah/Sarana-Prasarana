<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'nama' => 'Admin',
                'username' => 'admin',
                'email' => 'admin@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('admin'),
                'role' => 'admin',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama' => 'Himakom',
                'username' => 'himakom',
                'email' => 'himakom@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('himakom'),
                'role' => 'ormawa',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama' => 'KLI',
                'username' => 'kli',
                'email' => 'kli@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('kli'),
                'role' => 'kli',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama' => 'Sekumbem',
                'username' => 'sekumbem',
                'email' => 'sekumbem@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('sekumbem'),
                'role' => 'sekumbem',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama' => 'WD3',
                'username' => 'wd3',
                'email' => 'wd3@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('wd3'),
                'role' => 'wd3',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // [
            //     'nama' => 'Pembina',
            //     'username' => 'pembinahimakom',
            //     'email' => 'pembinahimakom@example.com',
            //     'email_verified_at' => now(),
            //     'password' => Hash::make('pembinahimakom'),
            //     'role' => 'pembina',
            //     'remember_token' => Str::random(10),
            //     'created_at' => now(),
            //     'updated_at' => now(),
            // ],
            [
                'nama' => 'Sub Bagian Sarana Prasarana',
                'username' => 'subbagsarpras',
                'email' => 'sarpras@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('subbagsarpras'),
                'role' => 'subbagsarpras',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($users as $user) {
            User::firstOrCreate(['email' => $user['email']], $user);
        }
    }
}
