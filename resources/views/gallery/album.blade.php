<h1 class="ui huge header aligned center">@{{ galleryCtrl.selectedAlbumImages.title }} Album</h1>
<div class="gallery-images-container" ng-init="galleryCtrl.selectedAlbum('{{$slug}}')" ng-cloak>
    <div class="ui four stackable cards" ng-cloak>
        <a class="ui card album-image" ng-repeat="album in galleryCtrl.selectedAlbumImages.images">
            <div class="image" ng-click="galleryCtrl.viewFullImage($index)" data-image-id="@{{ $index }}">
                <img style="background-image: url(' @{{ galleryCtrl.selectedAlbumImages.path + album }} ')" />
            </div>
        </a>
    </div>
</div>
@include('modals.album_modal')