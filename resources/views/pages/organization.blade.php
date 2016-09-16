@extends('templates.master')

@push('styles')
<link rel="stylesheet" type="text/css" href="{{ asset('css/organization.css') }}">
@endpush


@section('body')
    <div class="ui container" id="Organization">
        <div class="ui column grid">
            @if(Request::is('organization/elementary'))
                <div class="row">
                    <h1 class="ui center aligned header">Elementary Organization</h1>
                </div>
                <div class="row">
                    <div class="column">
                        <div class="ui raised compact segment">
                            <img src="{{ asset('images/organization/elementary/elem_org.jpg') }}" class="ui image big"/>
                        </div>
                    </div>
                </div>

            @elseif(Request::is('organization/highschool'))
                <div class="row">
                    <h1 class="ui center aligned header">High School Organization</h1>
                </div>
                <div class="row">
                    <div class="column">
                        <div class="ui raised compact segment">
                            <img src="{{ asset('images/organization/highschool/highschool_org.jpg') }}" class="ui image big"/>
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </div>
@endsection