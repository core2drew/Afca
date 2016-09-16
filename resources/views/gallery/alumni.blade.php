<h1 class="ui huge header aligned center">Alumni Students</h1>
<div class="gallery-images-container" ng-repeat="alumniStud in galleryCtrl.alumniStudents"   ng-cloak>
    <h1 ng-cloak>@{{alumniStud.year}}</h1>
    <div class="ui four stackable cards">
        <a class="ui raised card" ng-repeat="alumniStud in alumniStud.students_image" ng-click="galleryCtrl.showAlumniDetails(alumniStud)">
            <div class="image">
                <img ng-src="@{{alumniStud.image}}">
            </div>
            <div class="content">
                <p class="header center aligned">@{{alumniStud.name}}</p>
            </div>
        </a>
    </div>
</div>

@include('modals.alumni_details')