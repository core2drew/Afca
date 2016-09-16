@extends('templates.master')

@push('styles')
<link rel="stylesheet" type="text/css" href="{{asset('vendors/owl/assets/owl.carousel.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('css/home.css')}}">
@endpush

@section("body")
	@include("news_events.slider")
	@include("news_events.news_upcoming_events")
@stop

@push('scripts')
<script type="text/javascript" src="{{asset('vendors/ng-repeat-owl-carousel/ngRepeatOwlCarousel.js')}}"></script>
<script type="text/javascript" src="{{asset('vendors/owl/owl.carousel.js')}}"></script>
<script type="text/javascript" src="{{asset('js/controllers/newsController.js')}}"></script>
<script type="text/javascript" src="{{asset('js/controllers/eventsController.js')}}"></script>
@endpush