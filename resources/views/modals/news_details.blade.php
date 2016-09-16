<div class="ui modal long" id="NewsDetailsModal">
	<i class="close icon"></i>
	<div class="header">
		@{{newsCtrl.currentModalInfo.headline}}
	</div>
	<div class="image content">
		<img class="ui image" ng-src="@{{ newsCtrl.currentModalInfo.image }}"/>
		<div class="description">
			<p>@{{newsCtrl.currentModalInfo.dateObj.date}}, @{{newsCtrl.currentModalInfo.dateObj.time}}</p>
			<p>
				<strong>@{{newsCtrl.currentModalInfo.locationObj.landmark}}</strong>
				<br/>
				@{{newsCtrl.currentModalInfo.locationObj.address}}
			</p>
			<p>@{{newsCtrl.currentModalInfo.story}}</p>
		</div>
	</div>
</div>