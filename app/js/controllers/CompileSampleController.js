/**
 * Created by Administrator on 3/2/2017.
 */

'use strict';

eventsApp.controller('CompileSampleController',function($scope, $locale){
    $scope.appendToDivElement = function(markup){
        return $compile(markup) ($scope).appendTo(angular.element("#appendHere"));
    };

    $scope.myDate = Date.now();


    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
});