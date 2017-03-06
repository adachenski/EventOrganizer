/**
 * Created by Administrator on 2/28/2017.
 */

'use strict';

eventsApp.controller('EditEventController', function($scope, eventDataService){

    $scope.event = {};

    $scope.saveEvent = function(event, newEventForm) {
        if(newEventForm.$valid) {
            eventDataService.save(event)
                .$promise
                .then(function(response) {
                    console.log(response)
                })
                .catch(function(response) { console.log('failure', response)});
        }
    };
            //window.alert('saving event '+event.name);



    $scope.cancelEvent = function(){
        window.location='/EventDetails.html';
    };
});