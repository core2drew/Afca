<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ClubsController extends Controller
{
    public function index()
    {
        return view('pages.clubs');
    }
}
