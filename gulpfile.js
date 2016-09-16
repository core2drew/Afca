var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {

    //Development
    //SCSS
    mix.sass('main.scss')
        .sass('home.scss')
        .sass('about.scss')
        .sass('faculty.scss')
        .sass('gallery.scss')
        .sass('contact.scss')
        .sass('clubs.scss')
        .sass('organization.scss')

        //LocalJS
        .copy('resources/assets/js/main.js',
            'public/js/main.js')
        .copy('resources/assets/js/news_events.js',
            'public/js/news_events.js')

        //Contollers
        .copy('resources/assets/js/controllers',
            'public/js/controllers')

    /******VENDORS*******/

    //CSS Framework
    /*.copy('bower_components/semantic/dist/',
     'public/vendors/semantic')*/

    //JS Library/Framework
    /*.copy('bower_components/jquery/dist/',
     'public/vendors/jquery')
     .copy('bower_components/angular/angular.js',
     'public/vendors/angular')
     .copy('resources/assets/vendors/owl',
     'public/vendors/owl')
     .copy('bower_components/ng-repeat-owl-carousel/dist/ngRepeatOwlCarousel.js',
     'public/vendors/ng-repeat-owl-carousel')
     */

});
