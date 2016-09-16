<div class="ui modal long small" id="EventsDetailModal">
	<i class="close icon"></i>
	<div class="header">
		@{{eventsCtrl.currentInfo.title}}
	</div>
	<div class="image content">
		<img class="ui image" ng-src="@{{eventsCtrl.currentInfo.image}}"/>
		<div class="description">
			<p>@{{eventsCtrl.currentInfo.dateObj.date}}, @{{eventsCtrl.currentInfo.dateObj.time}}</p>
			<p ng-show="eventsCtrl.currentInfo.locationObj">
				<strong>@{{eventsCtrl.currentInfo.locationObj.landmark}}</strong> <br/>
				@{{eventsCtrl.currentInfo.locationObj.address}}
			</p>
			<p>@{{eventsCtrl.currentInfo.description}}</p>
		</div>
	</div>
</div>