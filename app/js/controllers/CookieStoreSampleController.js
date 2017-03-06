/**
 * Created by Administrator on 3/3/2017.
 */

'use strict';

eventsApp.controller('CookieStoreSampleController',function($scope, $cookieStore){

    $scope.event = {
        id:1,
        name:'My event'
    };

    $scope.saveEventToCookie = function(event){
        $cookieStore.put('event',event);
    };

    $scope.getEventFromCookie = function(){
      console.log($cookieStore.get('event'));
    };

    $scope.removeEventCookie = function(){
      $cookieStore.remove('event');
    };

});