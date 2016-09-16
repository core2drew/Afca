<h1 class="ui huge header aligned center">School Activities Albums</h1>
<div class="gallery-images-container" ng-init="galleryCtrl.albumImageRandomizer()" ng-cloak>
    <div class="ui three stackable cards">
        <a class="ui card album" ng-repeat="activityAlbum in galleryCtrl.activityAlbums" ng-href="school-activities/@{{ activityAlbum.slug }}">
            <div class="image" style="background-image: url(' @{{ activityAlbum.path + activityAlbum.cover}} ')">
            </div>
            <div class="content">
                <p class="header center aligned">@{{activityAlbum.title}}</p>
            </div>
        </a>
    </div>
</div>