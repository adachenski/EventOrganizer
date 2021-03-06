/**
 * Created by Administrator on 3/2/2017.
 */

'use strict';

eventsApp.controller('CacheSampleController', function($scope, myCache){

    $scope.addToCache = function(key, value){
        myCache.put(key,value);
    };

    $scope.readFromCache = function(key){

        return myCache.get(key);
    };

    $scope.getCacheStats = function(){

        return myCache.info();
    };
});