
<div class="ui modal long" id="SignUpModal">
	<div class="header">Sign Up</div>
	<div class="content">
		<p class="note">
			This sign up form is for AFCA Students and 
			<br/> Faculty Staffs only.
		</p>

		<form name="signupForm" class="ui form" ng-submit="mainCtrl.doSignUp(signupForm.$valid)" novalidate>
			<div class="field" ng-class="{'error': signupForm.idno.$invalid && mainCtrl.signupsubmitted}">
				<div class="ui corner labeled input">
					<input ng-model="mainCtrl.signupForm.idno" name="idno" type="text" placeholder="School ID No." required>
					<div class="ui corner label">
						<i class="asterisk icon"></i>
					</div>
				</div>
			</div>

			<div class="field" ng-class="{'error': signupForm.firstname.$invalid && mainCtrl.signupsubmitted}">
				<div class="ui corner labeled input">
					<input ng-model="mainCtrl.signupForm.firstname" name="firstname" type="text" placeholder="First name" required>
					<div class="ui corner label">
						<i class="asterisk icon"></i>
					</div>
				</div>
			</div>

			<div class="field" ng-class="{'error': signupForm.lastname.$invalid && mainCtrl.signupsubmitted}">
				<div class="ui corner labeled input">
					<input ng-model="mainCtrl.signupForm.lastname" name="lastname" type="text" placeholder="Last name" required>
					<div class="ui corner label">
						<i class="asterisk icon"></i>
					</div>
				</div>
			</div>

			<div class="field" ng-class="{'error': (signupForm.email.$invalid && mainCtrl.signupsubmitted) || mainCtrl.emailAlreadyUsed}">
				<div class="ui corner labeled input">
					<input ng-model="mainCtrl.signupForm.email" name="email" type="email" placeholder="Email Address" ng-change="mainCtrl.checkEmail()" required>
					<div class="ui corner label">
						<i class="asterisk icon"></i>
					</div>
				</div>
				<small class="error messages" ng-show="mainCtrl.emailAlreadyUsed">This email is already been used</small>
			</div>

			<div class="field" ng-class="{'error': (signupForm.password.$invalid && mainCtrl.signupsubmitted) || mainCtrl.signupForm.passwordNotMatch}">
				<div class="ui corner labeled input">
					<input ng-model="mainCtrl.signupForm.password" name="password" type="password" placeholder="Password" ng-minlength="8" required>
					<div class="ui corner label">
						<i class="asterisk icon"></i>
					</div>
				</div>
				<small class="error messages" ng-show="signupForm.password.$error.minlength">Your password is too short</small>
			</div>

			<div class="field" ng-class="{'error': (signupForm.confirmpass.$invalid && mainCtrl.signupsubmitted) || mainCtrl.signupForm.passwordNotMatch}">
				<div class="ui corner labeled input">
					<input  ng-model="mainCtrl.signupForm.confirmpass" name="confirmpass" type="password" placeholder="Confirm Password" required>
					<div class="ui corner label">
						<i class="asterisk icon"></i>
					</div>
				</div>
				<small class="error messages" ng-show="mainCtrl.signupForm.passwordNotMatch">Your password and confirm password doesn't match</small>
			</div>

			<button class="ui button green" type="submit" id="SignUpBtn">Sign Up</button>
			<p>Already have an account? <a href="javascript:void(0)" id="SwitchToLogin">Log in</a></p>
		</form>
	</div>
</div>