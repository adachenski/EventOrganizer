'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource','ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/new-event',{
                templateUrl:'templates/NewEvent.html',
                controller:'EditEventController'
            });
        $routeProvider
            .when('/events',{
                templateUrl:'templates/EventList.html',
                controller:'EventListController'
            });
        $routeProvider
            .when('/event/:eventId',{
                foo:'barbie',
                templateUrl:'templates/EventDetails.html',
                controller:'EventController',
                //Adding resolve property to our route in case we need to visualize
                // the page after we get the all the ajax response.
                resolve: {
                    event: function($route, eventDataService){
                        return eventDataService.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            });
        $routeProvider
            .when('/edit-profile',{
                templateUrl:'templates/EditProfile.html',
                controller:'EditProfileController'
            });
        $routeProvider
            .when('/directive-sample',{
               templateUrl:'templates/DirectiveSample.html',
                controller:'DirectiveSampleController'
            });
        $routeProvider
            .otherwise({redirectTo:'events'});
        $locationProvider.html5Mode(true);
    });
