<?php

namespace App\Http\Controllers;

use App\Http\Requests;

use DB;

use Illuminate\Http\Request;

use Auth;

use App\User;

class UsersController extends Controller
{
	public function check_email(Request $request)
	{
		$email = $request->get('email');
		$exist = DB::table('users')->where('email', $email)->exists();
		if($exist) 
		{
			return 'true';
		}
	}

	public function store(Request $request)
	{	
		User::create($request->all());
		$loginData = $request->only('email','password');
		if(Auth::attempt($loginData)){
			return redirect('/');
		}
	}

	public function authenticate(Request $request){
		$loginData = $request->only('email','password');

		if (!Auth::attempt($loginData)) {
			return 300;   
		}
	}

	public function logout()
	{
		Auth::logout();
		return redirect('/');
	}
}
