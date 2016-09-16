@extends('templates.master')

@push('styles')
<link rel="stylesheet" type="text/css" href="{{ asset('css/gallery.css') }}">
@endpush

@section("body")
    <div class="ui container" id="Gallery" ng-controller="GalleryController as galleryCtrl">
        @if(Request::is('gallery/students/elementary'))
            @include('gallery.elementary')
        @elseif(Request::is('gallery/students/highschool'))
            @include('gallery.highschool')
        @elseif(Request::is('gallery/alumni'))
            @include('gallery.alumni')
        @elseif(Request::is('gallery/jsc-nsc-videos'))
            @include('gallery.jsc')
        @elseif(Request::is('gallery/school-activities'))
            @include('gallery.school_activity_albums')
        @elseif(Request::is('gallery/school-activities/*'))
            @include('gallery.album')
        @endif
    </div>
@endsection

@push('scripts')
<script type="text/javascript" src="{{ asset('js/controllers/galleryController.js') }}"></script>
@endpush