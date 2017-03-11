'use strict';

eventsApp.directive('myCustomDirective', function($compile){

    return{
        restrict:'AE',
        template:"<input type='text' ng-model='sampleData'>{{sampleData}} <br>",
        scope:{

        }

        //the link func in this case has the same as template functionality
        //link: function(scope, element, attrs, controller ){
        //    var markup = "<input type='text' ng-model='sampleData'>{{sampleData}} <br>";
        //    angular.element(element).html($compile(markup)(scope));
        //}
    }
})
    .directive('greeting', function(){
    return{
        restrict:'AE',
        replace: true,
        template:'<button class="btn" ng-click="sayHello()">Say Hello</button>',
        controller:function($scope){
            $scope.sayHello = function(){
                alert(greetings);
            };
            var greetings = ['Hello English'];
            this.addGreetings = function(greets){
                greetings.push(greets);
            }
        }
    }
})

.directive('bulgarian',function(){
        return{
            restrict:'A',
            replace: true,
            require:'greeting',
            priority:1,
            link: function(scope, elemnt, attrs, controller){

                controller.addGreetings(' Zdraveite Bulgarian');
            }
        }
    }).directive('spanish',function(){
        return{
            restrict:'A',
            replace: true,
            require:'greeting',
            priority:2,
            link: function(scope, elemnt, attrs, controller){

                controller.addGreetings(' Ola Spanish');
            }
        }
    });