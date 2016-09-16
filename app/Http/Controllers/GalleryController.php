<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class GalleryController extends Controller
{
    public function index()
    {
        return view('gallery.index');
    }

    public function facultyIndex()
    {
        return view('pages.faculty');
    }

    public function showAlbum($slug)
    {
        $availSlugs = array('buwan-ng-wika', 'deworming', 'fire-drill', 'honor-roll-field-trip-primary', 'honor-roll-field-trip-highschool', 'youth-summit');
        if (in_array($slug, $availSlugs)) {
            return view('gallery.index')->with('slug', $slug);
        } else {
            return response()->view('errors.404');
        }
    }
}
