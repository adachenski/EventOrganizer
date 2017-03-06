/**
 * Created by Administrator on 2/26/2017.
 */

'use strict';

eventsApp.controller('EventController', function ($scope, $anchorScroll, $routeParams,$route, eventDataService, $log) {

    $scope.boolValue = true;
    $scope.snippet = '<span style="color: red">Hi from snippet</span>';
    $scope.myStyle = {color: 'red'};
    $scope.myClass = 'angularBlue';
    $scope.sortOrder = "";

    //this access foo property that is set in the $routeProvider.when function that uses EventController
    console.log($route.current.foo);
    //this access foo property that is set in the url view that uses EventController /event/1?foo=nasko
    console.log($route.current.params.foo);

    console.log($route.current.params.eventId);
    //Method 3 using $resource variant 1
    $scope.event = eventDataService.getEvent($routeParams.eventId);

    $scope.voteUpSession = function (session) {
        session.upVoteCount++;
    };

    $scope.voteDownSession = function (session) {
        session.upVoteCount--;
    };

    $scope.scrollToSessions = function () {

        $anchorScroll();
    };
    $scope.reload = function(){
        //reloads the page without reloading the entire app
      $route.reload();
    };
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

    //Method 4 using $resource variant 2
    //eventDataService.getEvent()
    //    .$promise
    //    .then(function (data) {
    //        $scope.event = data;
    //        //console.log(data.sessions[1]);
    //    }).catch(function (err) {
    //        console.log(err);
    //    });

});