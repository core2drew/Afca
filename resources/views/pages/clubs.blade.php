@extends('templates.master')

@push('styles')
<link rel="stylesheet" type="text/css" href="{{ asset('css/clubs.css') }}">
@endpush

@section('body')
    <div class="ui container" id="Clubs" ng-controller="ClubController as ctrl">
        @if(Request::is('clubs/elementary'))
            <div class="ui two column grid">
                <div class="row">
                    <h1 class="ui center aligned header">Elementary Clubs</h1>
                </div>
                <div class="row">
                    <div class="column">
                        <a class="ui raised compact segment" ng-click="ctrl.showClubModal($event)">
                            <img src="{{ asset('images/clubs/elementary/math.jpg') }}" class="ui image big"/>
                        </a>
                    </div>
                    <div class="column">
                        <a class="ui raised compact segment" ng-click="ctrl.showClubModal($event)">
                            <img src="{{ asset('images/clubs/elementary/science.jpg') }}" class="ui image big"/>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <a class="ui raised compact segment" ng-click="ctrl.showClubModal($event)">
                            <img src="{{ asset('images/clubs/elementary/english.jpg') }}" class="ui image big"/>
                        </a>
                    </div>
                    <div class="column">
                        <div class="ui raised compact segment" ng-click="ctrl.showClubModal($event)">
                            <img src="{{ asset('images/clubs/elementary/computer.jpg') }}" class="ui image big"/>
                        </div>
                    </div>
                </div>
            </div>
        @elseif(Request::is('clubs/highschool'))

            <div class="ui two column grid">
                <div class="row">
                    <h1 class="ui center aligned header">High School Clubs</h1>
                </div>
                <div class="row">
                    <div class="column">
                        <a class="ui raised compact segment" ng-click="ctrl.showClubModal($event)">
                            <img src="{{ asset('images/clubs/highschool/math.jpg') }}" class="ui image big"/>
                        </a>
                    </div>
                    <div class="column">
                        <a class="ui raised compact segment" ng-click="ctrl.showClubModal($event)">
                            <img src="{{ asset('images/clubs/highschool/science.jpg') }}" class="ui image big"/>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <a class="ui raised compact segment" ng-click="ctrl.showClubModal($event)">
                            <img src="{{ asset('images/clubs/highschool/english.jpg') }}" class="ui image big"/>
                        </a>
                    </div>
                    <div class="column">
                        <a class="ui raised compact segment" ng-click="ctrl.showClubModal($event)">
                            <img src="{{ asset('images/clubs/highschool/computer.jpg') }}" class="ui image big"/>
                        </a>
                    </div>
                </div>
            </div>
        @endif
        @include("modals.club_modal")
    </div>
@endsection

@push('scripts')
<script type="text/javascript" src="{{ asset('js/controllers/clubController.js') }}"></script>
@endpush

