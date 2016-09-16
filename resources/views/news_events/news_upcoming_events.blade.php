<div class="ui container" id="UpcomingEventsAndFeaturedEvents" ng-controller="EventsController as eventsCtrl">
	<div class="ui grid">
		<div class="row centered">
			<div class="column five wide">
				<div id="UpcomingEvents">
					<div class="row yellow-label">
						Upcoming Events
					</div>
					<div class="event-card" ng-repeat="upcomingEvent in eventsCtrl.eventsList | filterEvents:false:true" data-event-id=@{{upcomingEvent.id}}>
						<div class="image" ng-style="{ 'background-image': 'url( @{{upcomingEvent.image}} )' } ">
						</div>
						<h3 class="title" ng-cloak>@{{upcomingEvent.title}}</h3>
						<div class="details">
							<span class="datetime-container">
								<i class="calendar outline icon"></i>
								<span class="date-time">
									<p ng-cloak>@{{upcomingEvent.dateObj.date}}</p>
									<p ng-cloak><strong>@{{upcomingEvent.dateObj.time}}</strong></p>
								</span>
							</span>
							<button class="ui mini button yellow read-more"  ng-click="eventsCtrl.viewDetails($event)">Read more</button>
						</div>
					</div>
				</div>
			</div>
			<div class="column eight wide">
				<div id="FeaturedEvents">
					<div class="row yellow-label">
						Featured Events
					</div>
					<div id="EventCardsContainer">
						<div class="event-card" ng-repeat="featuredEvent in eventsCtrl.eventsList | filterEvents:true:false" data-event-id="@{{featuredEvent.id}}" ng-cloak>
							<div class="image" ng-style="{ 'background-image': 'url(@{{ featuredEvent.image }})' }">
							</div>
							<div class="details">
								<h3 class="title">@{{ featuredEvent.title }}</h3>
								<div class="datetime-location-container clear-float">
									
									<div class="location-container">
										<i class="marker icon"></i>
										<span class="location">
											<strong id="LocationName">@{{ featuredEvent.locationObj.landmark }}</strong>
											<p>@{{ featuredEvent.locationObj.address }}</p>
										</span>
									</div>

									<div class="datetime-container">
										<i class="calendar outline icon"></i>
										<span class="date-time">
											<p>@{{ featuredEvent.dateObj.date }}</p>
											<p><strong>@{{ featuredEvent.dateObj.time }}</strong></p>
										</span>
									</div>

									<button class="ui mini button yellow view-event"  ng-click="eventsCtrl.viewDetails($event)">
										View event
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
@include('modals.event_details')
</div>