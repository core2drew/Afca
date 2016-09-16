<div class="ui modal long" id="LoginModal">
    <div class="header">Log In</div>
    <div class="content">
        <p class="note">
            Exclusive only for AFCA Students <br/>
            and Faculty Members.
        </p>
        <form name="loginForm" class="ui form" ng-submit="mainCtrl.doLogin(loginForm.$valid)" novalidate>
            <p class="error messages" ng-show="mainCtrl.incorrectLogin">
                Incorrect email or password. Please try again.
            </p>
            <div class="field" ng-class="{'error': (loginForm.email.$invalid && mainCtrl.loginsubmitted)}">
                <input ng-model="mainCtrl.loginForm.email" name="email" type="email" placeholder="Email Address"
                       required>
            </div>

            <div class="field" ng-class="{'error': (loginForm.password.$invalid && mainCtrl.loginsubmitted)}">
                <input ng-model="mainCtrl.loginForm.password" name="password" type="password" placeholder="Password"
                       required>
            </div>

            <button class="ui button yellow" type="submit" id="LoginBtn">Log In</button>
            {{--<p>New user? <a href="javascript:void(0)" id="SwitchToSignup">Sign Up</a></p>--}}
        </form>
    </div>
</div>
@push('scripts')
    @if(session('showLoginModal'))
        <script type="text/javascript">
            $("#LoginModal").modal("show");
        </script>
    @endif
@endpush