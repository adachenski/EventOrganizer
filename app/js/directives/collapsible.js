/**
 * Created by Administrator on 3/9/2017.
 */

'use strict';

eventsApp.directive('collapsible', function(){
    return{
        restrict:'E',
        replace: true,
        template:'<div><h4 ng-click="toggleVisibility()" class="well-title">{{title}}</h4><div ng-show="visible" ng-transclude></div></div>',
        transclude:true,
        controller:function($scope){
            $scope.visible = false;

            $scope.toggleVisibility = function(){
                $scope.visible = !$scope.visible;
            };
        },
        scope:{
            title:'@'
        }
    }
});