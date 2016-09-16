<div class="ui container" id="SliderContainer" ng-controller="NewsController as newsCtrl">
    <div class="ui grid">
        <div class="row">
            <div class="column three wide">
                <div class="row yellow-label">
                    Featured News
                </div>
                <div id="NewsListContainer" class="row">
                    <ul>
                        <li ng-repeat="featuredNews in newsCtrl.featuredNews" data-id="@{{$index}}">
                            <a href="#" ng-cloak>
                                @{{featuredNews.headline}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="column ten wide fitted" id="CarouselSlider">
                <div class="owl-carousel">
                   <div class="item container" ng-repeat="featuredNews in newsCtrl.featuredNews" ng-init=" $last ? newsCtrl.carouselInitializer() : angular.noop()" ng-style="{ 'background-image': 'url( @{{featuredNews.image}} )' } " data-id="@{{$index}}"></div>
                </div>
            </div>
            <div class="column three wide fitted" ng-cloak>
                <div id="NewsDetails">
                    <div id="DateTime">
                        <i class="calendar outline icon"></i>
                        <div class="details">
                            <p ng-cloak>@{{newsCtrl.currentInfo.dateObj.date}}</p>
                            <p><strong ng-cloak>@{{newsCtrl.currentInfo.dateObj.time}}</strong></p>
                        </div>
                    </div>
                    <div id="Location">
                        <i class="marker icon"></i>
                        <div class="details">
							<span>
								<strong id="LocationName"
                                        ng-cloak>@{{newsCtrl.currentInfo.locationObj.landmark}}</strong>
								<p ng-cloak>@{{newsCtrl.currentInfo.locationObj.address}}</p>
							</span>
                        </div>
                    </div>

                    <div id="Description">
                        <i class="info icon"></i>
                        <div class="details">
                            <p ng-cloak>@{{newsCtrl.currentInfo.story}}</p>
                        </div>
                    </div>
                    <button class="ui button yellow" id="ReadMore" ng-click="newsCtrl.viewDetails()">Read more</button>
                </div>
            </div>
        </div>
    </div>
    @include('modals.news_details')
</div>


