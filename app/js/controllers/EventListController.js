/**
 * Created by Administrator on 3/5/2017.
 */

'use strict';

eventsApp.controller('EventListController', function($scope, $location, eventDataService){

    $scope.events = eventDataService.getAllEvents();
});