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
                controller:'EventController'
            });
        $routeProvider
            .otherwise({redirectTo:'events'});
        $locationProvider.html5Mode(true);
    });
