'use strict';

eventsApp.filter('durations', function(){
    return function(duration){
        switch(duration){
            case 1:
                return"30 min";
            case 2:
                return"1 hour";
            case 3:
                return"Half day";
            case 4:
                return"One day";
            default :
                return"default value";
        }
    }
});