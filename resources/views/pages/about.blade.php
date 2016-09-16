@extends('templates.master')

@push('styles')
<link rel="stylesheet" type="text/css" href="{{asset('css/about.css')}}">
@endpush

@section('body')
    <div class="ui container" id="AboutUs">
        <div class="ui grid">
            <div class="row">
                <div class="column">
                    <h1 class="ui center aligned header">
                        Welcome to Abraham's Flock Christian Academy
                    </h1>
                    <div class="ui raised segment">
                        <h4 class="ui header">Brief history of Abraham's Flock Christian Academy</h4>
                        <p>AFCA was named after Abraham of the Bible,
                            the Father of many nations-whose descendants will be as many as the stars of the sky.
                            Because of his faith, he was counted as Righteous.
                            His "aborted" sacrifice of his only son Isaac was the ultimate test of his obedience.
                            As for told by Hebrews 11:8-19.
                        </p>
                        <br/>
                        Why was the school named Abraham's Flock Christian Academy?
                        <ul>
                            <li>In recognition of Abraham's faith (Abraham is the Father of Faith)</li>
                            <li>In honor of the school chairman's first son named "Abraham"</li>
                        </ul>
                    </div>

                    <div class="ui raised segment">
                        <h4 class="ui header">About Abraham's Flock Christian Academy</h4>
                        <p>A school committed to helping you grow into a responsible and productive member of the
                            Christian community.
                            A wholesome educational formation is possible only through cooperative efforts exerted by
                            both the home and school.
                            Consistency of purpose and the manner by which it is achieved is a basic requirement to this
                            end; policies and regulations are established to insure the educational growth of students.
                        </p>
                    </div>

                    <div class="ui raised segment">
                        <h4 class="ui header">
                            Abraham's Flock Christian Academy is . . .
                        </h4>
                        <p>
                            A Christian School that uses an American International Standard Curriculum of the SCHOOL OF
                            TOMORROW SYSTEM;
                            which is a world-class, trend-setter, cutting-edge in educational reform. School of Tomorrow
                            is a pre-school,
                            primary and secondary academic program that combines the traditional one-room school with
                            completely individualized,
                            diagnostically-prescribed high tech learning.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
