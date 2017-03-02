/**
 * Created by Administrator on 2/26/2017.
 */

'use strict';

eventsApp.controller('EventController', function ($scope, eventDataService, $log) {

    $scope.boolValue = true;
    $scope.snippet = '<span style="color: red">Hi from snippet</span>';
    $scope.myStyle = {color: 'red'};
    $scope.myClass = 'angularBlue';
    $scope.sortOrder = "";
    //$scope.sortFilter="";

    //Method 1 using http
    //eventDataService.getEvent(function(data){
    //    $scope.event=data;
    //});

    //Method 2 using http
    //eventDataService.getEvent()
    //    .success(function (data) {
    //        $scope.event = data;
    //    })
    //    .error(function (data, status, header, config) {
    //
    //        $log.warn(data, status, header, config)
    //    });

    //Method 3 using $resource variant 1
    //$scope.event=eventDataService.getEvent();

    //Method 4 using $resource variant 2
    eventDataService.getEvent()
        .$promise
        .then(function (data) {
            $scope.event = data;
            console.log(data);
        }).catch(function (err) {
            console.log(err);
        });


    $scope.voteUpSession = function (session) {
        session.upVoteCount++;
    };

    $scope.voteDownSession = function (session) {
        session.upVoteCount--;
    }

});