@extends('templates.master')

@push('styles')
<link rel="stylesheet" type="text/css" href="{{asset('css/faculty.css')}}">
@endpush

@section('body')
    <div class="ui container" id="Faculty">
        <h1 class="ui header aligned center">Faculty</h1>
        <h2 class="ui header aligned center">S.Y. 2016 - 2017</h2>
        <div class="ui grid">
            <div class="row">
                <div class="column">
                    <div class="ui four stackable cards centered">
                        <div class="ui card centered">
                            <div class="image">
                                <img src="{{asset('images/faculty/howard.jpg')}}">
                            </div>
                            <div class="content">
                                <p class="header aligned center">School Administrator</p>
                            </div>
                        </div>
                        <div class="ui card centered">
                            <div class="image">
                                <img src="{{asset('images/faculty/arlene.jpg')}}">
                            </div>
                            <div class="content">
                                <p class="header aligned center">School Principal</p>
                            </div>
                        </div>
                    </div>

                    <div class="ui five stackable cards centered">
                        <div class="ui card centered">
                            <div class="image">
                                <img src="{{asset('images/faculty/bhernie.jpg')}}">
                            </div>
                            <div class="content">
                                <p class="header aligned center">Office Staff</p>
                            </div>
                        </div>
                        <div class="ui card centered">
                            <div class="image">
                                <img src="{{asset('images/faculty/timmy.jpg')}}">
                            </div>
                            <div class="content">
                                <p class="header aligned center">High School Supervisor</p>
                            </div>
                        </div>
                        <div class="ui card centered">
                            <div class="image">
                                <img src="{{asset('images/faculty/rowell.jpg')}}">
                            </div>
                            <div class="content">
                                <p class="header aligned center">Intermediate Supervisor</p>
                            </div>
                        </div>
                        <div class="ui card centered">
                            <div class="image">
                                <img src="{{asset('images/faculty/necei.jpg')}}">
                            </div>
                            <div class="content">
                                <p class="header aligned center">Primary Supervisor</p>
                            </div>
                        </div>
                        <div class="ui card centered">
                            <div class="image">
                                <img src="{{asset('images/faculty/hannah.jpg')}}">
                            </div>
                            <div class="content">
                                <p class="header aligned center">Preschool Supervisor</p>
                            </div>
                        </div>

                        <div class="ui card centered">
                            <div class="image">
                                <img src="{{asset('images/faculty/marvin.jpg')}}">
                            </div>
                            <div class="content">
                                <p class="header aligned center">High School Monitor</p>
                            </div>
                        </div>
                        <div class="ui card centered">
                            <div class="image">
                                <img src="{{asset('images/faculty/carly.jpg')}}">
                            </div>
                            <div class="content">
                                <p class="header aligned center">High School Monitor</p>
                            </div>
                        </div>
                        <div class="ui card centered">
                            <div class="image">
                                <img src="{{asset('images/faculty/jessica.jpg')}}">
                            </div>
                            <div class="content">
                                <p class="header aligned center">Intermediate Monitor</p>
                            </div>
                        </div>
                        <div class="ui card centered">
                            <div class="image">
                                <img src="{{asset('images/faculty/john.jpg')}}">
                            </div>
                            <div class="content">
                                <p class="header aligned center">Primary Monitor</p>
                            </div>
                        </div>
                        <div class="ui card centered">
                            <div class="image">
                                <img src="{{asset('images/faculty/jigs.jpg')}}">
                            </div>
                            <div class="content">
                                <p class="header aligned center">Preschool Monitor</p>
                            </div>
                        </div>

                        <div class="ui card centered">
                            <div class="image">
                                <img src="{{asset('images/faculty/apollo.jpg')}}">
                            </div>
                            <div class="content">
                                <p class="header aligned center">Maintenance Officer</p>
                            </div>
                        </div>
                        <div class="ui card centered">
                            <div class="image">
                                <img src="{{asset('images/faculty/jacklord.jpg')}}">
                            </div>
                            <div class="content">
                                <p class="header aligned center">Maintenance Officer</p>
                            </div>
                        </div>
                        <div class="ui card centered">
                            <div class="image">
                                <img src="{{asset('images/faculty/kerwin.jpg')}}">
                            </div>
                            <div class="content">
                                <p class="header aligned center">Security Officer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
