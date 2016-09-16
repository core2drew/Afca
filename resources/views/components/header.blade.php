<div class="ui fluid container" id="Header">
	<div class="ui grid container">
		<div class="row">
			<div class="column fitted">
				<img id="Logo" src="{{URL::asset('images/Logo_horizontal.png')}}">
			</div>
		</div>
		<div class="row">
			<div class="column eleven wide fitted">
				<div class="ui menu" id="MainMenu">
					<a class="{{ Request::is('/') ? 'item actived' : 'item' }}" href="/">
						News & Events
					</a>
					<a class="{{ Request::is('about-us') ? 'item actived' : 'item' }}"  href="/about-us">
						About
					</a>

					<a class="{{ Request::is('faculty') ? 'item actived' : 'item' }}" href="/faculty">
						Faculty
					</a>

					@if(Auth::check())

					<div class="{{Request::is('gallery/*') ? 'item ui dropdown actived' : 'item ui dropdown' }}"  id="GalleryDropDown">
						Gallery
						<i class="dropdown icon"></i>
						<div class="menu">
							<div class="item">
								<i class="dropdown icon"></i>
								<span class="text">Students S.Y. 2016 - 2017</span>
								<div class="menu">
									<a class="item"  href="/gallery/students/elementary">Elementary</a>
									<a class="item" href="/gallery/students/highschool">High School</a>
								</div>
							</div>
							<a class="item" href="/gallery/alumni">Alumni</a>
							<a class="item" href="/gallery/jsc-nsc-videos">JSC and NSC</a>
							<a class="item" href="/gallery/school-activities">School Activities</a>
						</div>
					</div>

					<div class="ui dropdown item" id="OtherDropDown">
						School Organizations
						<i class="dropdown icon"></i>
						<div class="menu">
							<div class="item">
								<i class="dropdown icon"></i>
								<span class="text">Elementary</span>
								<div class="menu">
									<a class="item" href="/organization/elementary">Student Body Organization</a>
									<a class="item" href="/clubs/elementary/">Clubs</a>
								</div>
							</div>
							<div class="item">
								<i class="dropdown icon"></i>
								<span class="text">High School</span>
								<div class="menu">
									<a class="item" href="/organization/highschool">Student Body Organization</a>
									<a class="item" href="/clubs/highschool/">Clubs</a>
								</div>
							</div>
						</div>
					</div>
					@else
					<a class="item" ng-click="mainCtrl.showLoginModal()">
						Gallery
					</a>
					<a class="item" ng-click="mainCtrl.showLoginModal()">
						School Organizations
					</a>
					@endif

					<a class="{{ Request::is('contact-us') ? 'item actived' : 'item' }}" href="/contact-us">
						Contact Us
					</a>
				</div>
			</div>
			<div class="column two wide">
				<div class="ui menu social-media-links">
					<a class="item fitted" target="_blank" href="https://www.facebook.com/Abrahams-Flock-Christian-Academy-149756691731957/?ref=br_tf">
						<i class="facebook f icon"></i>
					</a>
					<a class="item fitted" target="_blank" href="https://twitter.com/AFCA2015">
						<i class="twitter icon"></i>
					</a>
					<a class="item fitted" target="_blank" href="https://www.youtube.com/channel/UC-uAc4BMqM9W_jqqh7_4Z6Q">
						<i class="youtube icon"></i>
					</a>
				</div>
			</div>
			@if(Auth::check())
			<div class="column three wide" id="UserDropdownContainer">
				<div class="ui green buttons" >
					<div class="ui button">Hi, {{Auth::user()->first_name}}</div>
					<div class="ui floating dropdown icon button" id="UserDropdown">
						<i class="dropdown icon"></i>
						<div class="menu">
							<a href="/user/logout" class="item">Log Out</a>
						</div>
					</div>
				</div>
			</div>
			@else 
			<div class="column three wide" id="LoginContainer">
				<button class="ui green button" id="LoginBtn" ng-click="mainCtrl.showLoginModal()">
					<i class="icon user"></i>
					Log In
				</button>
			</div>
			@endif
		</div>
	</div>
</div>


@include('modals.login')

