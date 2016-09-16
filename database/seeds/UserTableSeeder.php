<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$school_id = '000';
    	$first_name = 'admin';
    	$last_name = 'admin';
    	$email = 'admin@afca-edu.com';
    	$password = Hash::make('admin001');

    	DB::table('users')->delete();
       	User::create(compact('school_id','first_name','last_name','email','password'));
    }
}
