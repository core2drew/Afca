<h1 class="ui huge header aligned center">High School Students</h1>
<div class="gallery-images-container" ng-repeat="highStud in galleryCtrl.highSchoolStudents" ng-cloak>
    <h1 ng-cloak>@{{highStud.level}}</h1>
    <div class="ui four stackable cards">
        <div class="ui card" ng-repeat="studImage in highStud.students_image">
            <div class="image">
                <img ng-src="@{{studImage.image}}">
            </div>
        </div>
    </div>
</div>