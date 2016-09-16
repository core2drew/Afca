var app = angular.module('Afca');

app.controller("NewsController", function ($timeout, $scope) {
    var newsCtrl = this;

    newsCtrl.featuredNews = [
    {
        "id":1,
        "headline": "Keep Your Tummy Clean!",
        "dateObj": {
            "date": "July 18, 2016",
            "time": "Mon, 10:00 AM"
        },
        "locationObj": {
            "landmark": "AFCA - Compound",
            "address": "837 Gen Luna St. Sta Rosa 1,Noveleta Cavite 4105"
        },
        "story": "It was on July 18, 2016 when the Health Center officers of Noveleta came in the school for de-worming. Some were terrified to eat the chewable medicine so that the worm in your stomach will be irritated and be forced its way out. It was a practice to keep our body healthy and clean.",
        "image": "images/slider/deworming_banner.jpg"
    },

    {
        "id":2,
        "headline": "Savor the Flavor of Eating Right",
        "dateObj": {
            "date": "July 22, 2016",
            "time": "Fri, 8:00 AM"
        },
        "locationObj": {
            "landmark": "AFCA - Compound",
            "address": "837 Gen Luna St. Sta Rosa 1,Noveleta Cavite 4105"
        },
        "story": "The  Nutrition Month was celebrated last July 21, 2016. We had an activity in each learning center which is the “Show and Tell”. You must make a riddle out of the fruit you picked. We also sell some food. For the Preschool they made “veggie kwek-kwek”,  for the Primary made and sell tuna sandwiches and egg sandwiches. The Intermediate pupils  had  fruit shake that is not-so surprisingly a big hit for the parents and pupils because it is a quite hot and humid  lunch. While the High School had  fruit salad and macaroni salad which is delicious according to the critics and the buyers.",
        "image": "images/slider/nutrition_banner.jpg"
    },

    {
        "id":3,
        "headline": "Filipino: Wika ng Karunungan",
        "dateObj": {
            "date": "August 26th 2016",
            "time": "Fri, 10:00 AM"
        },
        "locationObj": {
            "landmark": "AFCA - Compound",
            "address": "837 Gen Luna St. Sta Rosa 1,Noveleta Cavite 4105"
        },
        "story": "Ang selebrasyon ng Buwan ng Wika ay noong Agosto 26, 2016. Ito ay ipinagdiriwang upang bigyang halaga ang ating sariling wika. Nagkaroon kami ng iba't ibang gawain sa bawat baitang. Para sa mga Preschool may coloring contest, sa mga Primary naman ay nagpaligsahan sila sa pagbigkas ng tula. Sa mga Intermediate naman ay ang paggawa ng poster at ang huli ay ang High school na gumawa ng tula tungkol sa tema na 'Filipino:Wika ng Karunungan'. Nagkaroon din kami ng food stalls na nagbebenta ng mga pagkaing Pilipino at ukay-ukay.",
        "image": "images/slider/buwan_ng_wika.jpg"
    },

    {
        "id":4,
        "headline": "Youth Summit 2016",
        "dateObj": {
            "date": "August 30, 2016",
            "time": "Tue, 1:00 PM"
        },
        "locationObj": {
            "landmark": "Noveleta Elementary School",
            "address": "San Rafael 1 Noveleta, Cavite"
        },
        "story": "Just this August 30, 2016, AFCA’s grade ten students went to Noveleta’s 2nd Youth Summit held in Noveleta Elementary School. The theme for this year’s summit is “Lead, Envision, Aspire, Hope”, otherwise known as LEAH. Mr. Herald Villarca, who also goes by the name “Kuya Kyut”, and Ms. Toni Faye Tan were the two guest speakers in the event. Of course let’s not forget the town’s mayor, Dino Chua, and his beloved counselors. Together they unite to help us students make a change in the town little by little, but before we could make that kind of change, we have to make a change in ourselves. We have to know the rules and regulations starting in the school. Then, there was this group dynamics so that we could bond with the other students from different schools. It helped us build our sociability on approaching students within the group we belong. The main objective of the challenge was for us to learn how to lead or guide people. Team work. We need someone to be the leader to guide us in making the right decision and everyone needs to agree on what we'll do. The right teaching or guides will lead us to the right path.",
        "image": "images/slider/youth_summit_banner.jpg"
    },

    {
        "id":5,
        "headline": "Fire Drill 2016",
        "dateObj": {
            "date": "July 29th 2016",
            "time": "Fri, 2:00 PM"
        },
        "locationObj": {
            "landmark": "AFCA - Compound 5",
            "address": "837 Gen Luna St. Sta Rosa 1,Noveleta Cavite 4105"
        },
        "story": "This year, people from the fire department here in Noveleta came in our school for a fire drill. Fire drills are for the sake of the children in case of fire, they taught us on how to use the fire extinguisher using the keywords PASS (Pull pin, Aim at base of fire, Squeeze handle, Sweep side to side), the student officers were the first ones who tried the fire extinguisher because they are the ones in charge in case of an emergency, but other students were also given a chance because learning to use a fire extinguisher is very important for an individual, especially now that accidents often happen. At the end of the successful fire drill, students came back to their respective learning centers.",
        "image": "images/slider/fire_banner.jpg"
    }
    ];


    newsCtrl.currentInfo = newsCtrl.featuredNews[0];
    newsCtrl.currentModalInfo = {};

    newsCtrl.viewDetails = function () {
        newsCtrl.currentModalInfo = newsCtrl.featuredNews[newsCtrl.currentInfo.id - 1];
        $('#NewsDetailsModal').modal({blurring: true}).modal({
            onVisible: function () {
                $("#NewsDetailsModal").modal("refresh");
            }
        }).modal('show');
    }

    newsCtrl.carouselInitializer = function() {
        var newsListContainer = $("#NewsListContainer li");
        var newsSlider = $("#SliderContainer .owl-carousel");
        var newsSliderNav;
        var prevNav, nextNav;

        newsSlider.owlCarousel({
            autoPlay:true,
            navigation : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
            loop: true,
            center: true,
            navigationtext: ["prev", "next"],
            addClassActive:true,
            afterMove:function(e){
                var index = $(e).find('.owl-wrapper > .owl-item.active > .item').data('id');
                if (index >= 5) {
                    index = 0;
                }

                $scope.$apply(function () {
                    newsCtrl.currentInfo = newsCtrl.featuredNews[index];
                });

                newsListContainer.eq(index).siblings().removeClass("active").end().addClass("active");
            }
        });

        newsListContainer.first().addClass("active");

        newsSliderNav = newsSlider.find('.owl-controls > .owl-button');
        prevNav = newsSliderNav.children('.owl-prev');
        nextNav = newsSliderNav.children('.owl-next');

        prevNav.html("<i class='angle left icon'></i>")
        nextNav.html("<i class='angle right icon'></i>")

        newsListContainer.on("click", function (e) {
            var index = $(this).data('id');
            $(this).siblings().removeClass("active").end().addClass("active");
            newsSlider.trigger("owl.jumpTo", [index, '500']);
            e.preventDefault();
        });
    };
});