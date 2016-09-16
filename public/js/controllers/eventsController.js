var app = angular.module('Afca');

app.controller("EventsController", function ($http) {
    var eventsCtrl = this;

    eventsCtrl.eventsList = [
        {
            'id': 0,
            'title': 'National Student Convention (NSC)',
            'dateObj': {
                'date': 'October 23 - 27, 2016',
                'time': 'Sun - Thur, 10:00 AM'
            },
            'image': 'images/upcoming_featured/nsc_banner.jpg',
            'description': 'Students 13 and above will join the said convention, this year it will be held in Davao on October 23-27, A.C.E. Students all over the Philippines compete in a convention where one week can last a lifetime, giving them and their school multiple options in events to develop every child’s talent or skill. The said convention is also a good opportunity for a student to make good friends.',
            'is_featured': 0
        },
        {
            'id': 1,
            'title': 'Thanksgiving Party',
            'dateObj': {
                'date': 'December 21, 2016',
                'time': 'Wed, 8:00 AM'
            },
            'image': 'images/upcoming_featured/thanks_banner.jpg',
            'description': 'This where students are to perform their Christmas party presentation, this day is filled with fun activities for the students, although some students await for these activities, most students await for their exchange gifts, but the high school department has some differences, every grade/level will have their presentation, which is actually a contest.',
            'is_featured': 0
        },
        {
            'id': 2,
            'title': 'Bible Month',
            'dateObj': {
                'date': 'January 27, 2017',
                'time': 'Fri, 8:00 AM'
            },
            'image': 'images/upcoming_featured/bible_banner.jpg',
            'description': 'We celebrate Bible month at the end of January, the day is filled with fun activities that has something to do with the Bible, the usual games but of course is connected to Bible trivia and questions.',
            'is_featured': 0
        },
        {
            'id':3,
            'title':'Student Organization Election',
            'dateObj': {
                'date': 'July 29, 2016',
                'time': ''
            },
            'locationObj': {
                'landmark': 'AFCA - Compound 5',
                'address': '837 Gen Luna St. Sta Rosa 1,Noveleta Cavite 4105'
            },
            'image': 'images/upcoming_featured/election_banner.jpg',
            'description': 'The high-school officers are not just for the high-school students, the high-school officers are the officers of the school, where Alfred Angelo Ibanez won as President, Jenzenne Valenzuela as the Internal Vice President, Abigail Buenviaje as the External Vice President.  Therease Antonine Pornuevo won as the Secretary, Charity Reign Dela Cruz as the Treasurer, Vanya Venice Ceredon as the Auditor, Eunelle Faith Luna as the Business Manager, and  John Rick Cristino as the P.R.O. Karl Matthew Canovas won as the Sgt. at Arms (male), Jasmin Allein Marquez as the Sgt. at Arms (female), Joross Valenzuela as the Escort, and Elyzza Gaile Aguilar as the Muse, these are the students who will do their work as part of the student organization. ',
            'is_featured': 1
        },
        {
            'id': 4,
            'title': 'Junior Student Convention',
            'locationObj': {
                'landmark': 'AFCA - Compound 5',
                'address': '837 Gen Luna St. Sta Rosa 1,Noveleta Cavite 4105'
            },
            'dateObj': {
                'date': 'Date to be announced',
                'time': ''
            },
            'image': 'images/upcoming_featured/jsc_banner.jpg',
            'description': 'This is another convention for A.C.E. Students, but this is for students 12 years old and below, also this is smaller because it is based on your school’s location, whether you are from NCR, Southern Luzon, Northern Luzon, and more. This is not one big convention, but more of a regional convention, some events are also not included such as photography, some needle and threads, and computer events',
            'is_featured': 1
        },
        {
            'id': 5,
            'title': 'AFCA’s 16th Foundation Day',
            'locationObj': {
                'landmark': 'AFCA - Compound 5',
                'address': '837 Gen Luna St. Sta Rosa 1,Noveleta Cavite 4105'
            },
            'dateObj': {
                'date': 'Date to be announced',
                'time': ''
            },
            'image': 'images/upcoming_featured/foundation_banner.jpg',
            'description': 'Our foundation day is when students of AFCA celebrate with fun activities. They are divided into two teams, the Blue Team and the Purple Team, but the main event of our foundation day is the cheering competition, but there are also activities where points are earned and given to the team who will win. There are two main awards, the winner for the cheering competition, and the overall winner, even though we compete against each other, at the end of the day, we are all one family, one AFCA family.',
            'is_featured': 1
        },
    ];

    eventsCtrl.viewDetails = function (event) {
        var currentCard = $(event.currentTarget).closest(".event-card");
        var eventID = currentCard.data('event-id');
        eventsCtrl.currentInfo = eventsCtrl.eventsList[eventID];
        $('#EventsDetailModal').modal({blurring: true}).modal({
            onVisible: function () {
                $("#EventsDetailModal").modal("refresh");
            }
        }).modal('show');
    }
});

app.filter('filterEvents', function () {
    return function (events, featured, upcoming) {
        var filteredEvents = [];
        if (featured && !upcoming) {
            for (var i = 0; i < events.length; i++) {
                if (events[i].is_featured) {
                    filteredEvents.push(events[i]);
                }
            }
            return filteredEvents;
        }

        else if (!featured && upcoming) {
            for (var i = 0; i < events.length; i++) {
                if (!events[i].is_featured) {
                    filteredEvents.push(events[i]);
                }
            }
            return filteredEvents;
        }
        else {
            return events;
        }
    }
});