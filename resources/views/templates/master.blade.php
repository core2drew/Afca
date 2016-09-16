<!DOCTYPE html>
<html ng-app="Afca">
<head>
	<title>AFCA - Abraham's Flock Christian Academy</title>
	<link rel="shortcut icon" href="{{ asset('images/favicon.ico') }}">
	<link rel="stylesheet" type="text/css" href="{{ asset('css/main.css') }}">

	@stack('styles')

	<link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet">
</head>
<body ng-controller="MainController as mainCtrl" ng-cloak>
	<div class="pusher">
		@include("components.header")
		@yield("body")
		@include("components.footer")
	</div>

	<script type="text/javascript" src="{{asset('vendors/jquery/jquery.min.js')}}"></script>
	<script type="text/javascript" src="{{asset('vendors/angular/angular.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/afcaApp.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/controllers/mainController.js')}}"></script>
	<script type="text/javascript" src="{{asset('vendors/semantic/semantic.min.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/main.js')}}"></script>
	@stack('scripts')
</body>
</html>