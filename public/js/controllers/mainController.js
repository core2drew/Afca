var app = angular.module('Afca');

app.controller("MainController", function ($http, $timeout) {
    var mainCtrl = this;
    mainCtrl.contactsubmitted = false;

    mainCtrl.showSignUpModal = function () {
        mainCtrl.signupsubmitted = false;
        mainCtrl.emailAlreadyUsed = false;
        mainCtrl.loginsubmitted = false;
        mainCtrl.incorrectLogin = false;

        $("#SignUpModal").modal("show");

        //Clear all fields in signupform
        for (var prop in mainCtrl.signupForm) {
            mainCtrl.signupForm[prop] = "";
        }

        //Clear all fields in loginform
        for (var prop in mainCtrl.loginForm) {
            console.log(mainCtrl.loginForm[prop]);
            mainCtrl.loginForm[prop] = "";
        }
    }

    mainCtrl.showLoginModal = function () {
        $("#LoginModal").modal("show");
    }

    mainCtrl.checkEmail = function () {
        mainCtrl.emailAlreadyUsed = false;
        //Check email if already used
        $http.get("/user/check_email",
            {
                params: {
                    email: mainCtrl.signupForm.email
                }
            })
            .success(function (response) {
                if (response) {
                    mainCtrl.emailAlreadyUsed = response;
                }
            })
            .error(function (response) {
                console.log(response);
            });
    }

    mainCtrl.doSignUp = function (isValid) {
        var signupform = {};
        mainCtrl.signupsubmitted = true;
        if (isValid) {
            signupform = mainCtrl.signupForm;
            signupform.passwordNotMatch = false;

            //Check password and confirm password match and if email is not used
            if (signupform.password !== signupform.confirmpass) {
                signupform.passwordNotMatch = true;
                return;
            }

            if (!!mainCtrl.emailAlreadyUsed) {
                return;
            }

            $http.post("/user/signup",
                {
                    school_id: Number(signupform.idno),
                    first_name: signupform.firstname,
                    last_name: signupform.lastname,
                    email: signupform.email,
                    password: signupform.password,
                    confirmpass: signupform.confirmpass
                })
                .success(function (response) {
                    mainCtrl.signupsubmitted = false;
                    $("#SignUpModal").modal("hide");
                    window.location.reload();
                })
                .error(function (response) {
                    console.log(response);
                });
        }
    }

    mainCtrl.doLogin = function (isValid) {
        var loginform = {};
        mainCtrl.loginsubmitted = true;
        mainCtrl.incorrectLogin = false;
        if (isValid) {
            loginform = mainCtrl.loginForm;
            $http.post("/user/login",
                {
                    email: loginform.email,
                    password: loginform.password
                })
                .success(function (response) {
                    if (response == 300) {
                        mainCtrl.incorrectLogin = true;
                        return false
                    }
                    window.location.reload();
                })
                .error(function (response) {
                    console.log(response);
                });
        }
    }

    mainCtrl.sendMail = function (isValid) {
        var inquirer = {};
        mainCtrl.contactsubmitted = true;
        if (isValid) {
            inquirer = mainCtrl.inquirer
            $("#InquriesFormContainer .ui.dimmer").addClass('active');

            $http.get("/mail/inquires",
                {
                    params: {
                        fullname: inquirer.fullname,
                        email: inquirer.email,
                        subject: inquirer.subject,
                        message: inquirer.message,
                    }
                })
                .success(function (response) {
                    $("#InquriesFormContainer .ui.dimmer .ui.text.loader").html('Message Sent!');
                    $("#InquriesFormContainer .ui.dimmer").css({
                        'backgroundColor': 'rgba(22, 171, 57,0.85)'
                    });

                    $timeout(function () {
                        $("#InquriesFormContainer .ui.dimmer").removeClass('active').removeAttr('style');
                    }, 5000);

                    //Clear all fields in contact form
                    for (var prop in mainCtrl.inquirer) {
                        mainCtrl.inquirer[prop] = "";
                    }
                    mainCtrl.contactsubmitted = false;
                })
                .error(function (response) {
                    mainCtrl.contactsubmitted = false;
                    $("#InquriesFormContainer .ui.dimmer .ui.text.loader").html('Error Sending. Try again');
                    $timeout(function () {
                        $("#InquriesFormContainer .ui.dimmer").removeClass('active');
                    }, 5000);

                });
        }
    }
});