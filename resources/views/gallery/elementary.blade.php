<h1 class="ui huge header aligned center">Elementary Students</h1>
<div class="gallery-images-container" ng-repeat="elemStud in galleryCtrl.elementaryStudents"  ng-cloak>
	<h1 ng-cloak>@{{elemStud.level}}</h1>
	<div class="ui four stackable cards">
		<div class="ui card" ng-repeat="studImage in elemStud.students_image">
			<div class="image">
				<img ng-src="@{{studImage.image}}">
			</div>
		</div>
	</div>
</div>