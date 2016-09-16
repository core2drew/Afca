@extends('templates.master')

@push('styles')
<link rel="stylesheet" type="text/css" href="{{asset('css/contact.css')}}">
@endpush

@section('body')
<div class="ui container" id="ContactUs">
	<div class="ui grid">
		<div class="row">
			<div class="column eight wide">
				<h1 class="header">
					Visit Us
				</h1>
				<div id="Map"></div>
			</div>
			<div class="column eight wide">
				<h1 class="header">
					Contact Us
				</h1>
				<div class="details-container">
					<i class="marker icon"></i>
					<p class="details">
						<strong>Abraham's Flock Christian Academy</strong><br/>
						Gen. Luna St., Sta. Rosa 1, Noveleta, Cavite 4105
					</p>
				</div>

				<div class="details-container">
					<i class="call icon"></i>
					<p class="details">
						<strong>(046) 438-0421​</strong>
					</p>
				</div>

				<div class="details-container">
					<i class="mobile icon"></i>
					<p class="details">
						<strong>(0920) 545-5016 (Smart)</strong><br/>
						<strong>(0915) 809-8991 (Globe)</strong>
					</p>
				</div>

				<div class="details-container">
					<i class="mail icon"></i>
					<p class="details">
						<strong>abrahamsflock@gmail.com</strong>
					</p>
				</div>

				<div id="InquriesFormContainer">
					<div class="ui segment">
						<p>If you have inquiries feel free to send a message.</p>
						<form name="contactform" class="ui form" ng-submit="mainCtrl.sendMail(contactform.$valid)" novalidate>
							<div class="fields">
								<div class="eight wide field" ng-class="{'error':contactform.fullname.$invalid && mainCtrl.contactsubmitted}">
									<input ng-model="mainCtrl.inquirer.fullname" name="fullname" type="text" placeholder="Full Name" required>
								</div>
								<div class="eight wide field" ng-class="{'error':contactform.email.$invalid && mainCtrl.contactsubmitted}">
									<input ng-model="mainCtrl.inquirer.email" name="email" type="email" placeholder="Email Address" required>
								</div>
							</div>
							<div class="field" ng-class="{'error':contactform.subject.$invalid && mainCtrl.contactsubmitted}">
								<input ng-model="mainCtrl.inquirer.subject" name="subject" type="text" placeholder="Subject" required>
							</div>
							<div class="field" ng-class="{'error':contactform.message.$invalid && mainCtrl.contactsubmitted}">
								<textarea ng-model="mainCtrl.inquirer.message" name="message" placeholder="Message" required></textarea>
							</div>
							<button class="ui button green" type="submit" id="SendBtn">Send</button>
						</form>

						<div class="ui dimmer">
							<div class="ui text loader">Sending</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
@stop

@push('scripts')
<script>
	function initMap() {
		var myLatLng = {lat: 14.42446454, lng: 120.88174796};

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('Map'), {
        	center: myLatLng,
        	scrollwheel: false,
        	zoom: 15
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
        	map: map,
        	position: myLatLng,
        	title: "Abraham's Flock Christian Academy"
        });
    }
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBG7hC5dFsF0LN2Mbd9r5JLFJJHcsg-Xqk&callback=initMap"
async defer></script>
@endpush
