<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
	return view('news_events.index');
});

Route::get('about-us', function () {
	return view('pages.about');
});

Route::get('faculty',function(){
    return view('pages.faculty');
});

Route::group(['middleware'=>'auth', 'prefix'=>'gallery'], function() {
	Route::get('students/elementary','GalleryController@index');
	Route::get('students/highschool','GalleryController@index');
	Route::get('alumni','GalleryController@index');
	Route::get('jsc-nsc-videos','GalleryController@index');
	Route::get('school-activities', 'GalleryController@index');
	Route::get('school-activities/{slug}', 'GalleryController@showAlbum');
});

Route::get('contact-us',function(){
	return view('pages.contact');
});

Route::group(['middleware'=>'auth' ,'prefix'=>'organization'],function(){
	Route::get('elementary',"OrganizationController@index");
	Route::get('highschool',"OrganizationController@index");
});

Route::group(['middleware'=>'auth', 'prefix'=>'clubs'],function(){
	Route::get('elementary',"ClubsController@index");
	Route::get('highschool',"ClubsController@index");
});

Route::get('/mail/inquires','MailController@sendInquiry');

Route::group(['prefix'=>'user'], function(){
	Route::get('check_email',"UsersController@check_email");
	Route::post('signup',"UsersController@store");
	Route::post('login',"UsersController@authenticate");
	Route::get('logout',"UsersController@logout");
});