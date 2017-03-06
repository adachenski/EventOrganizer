/**
 * Created by Administrator on 2/28/2017.
 */

eventsApp.factory('eventDataService', function ($resource, $http, $log) {

    //Method 3 using $resource
    var resource = $resource('/data/event/:id', {id: '@id'});
    return {
        getEvent: function (eventId) {

            return resource.get({id: eventId});
        },
        save: function (event) {

            event.id = 1;
            return resource.save(event);
        },
        getAllEvents: function () {

            return resource.query();
        }

    };

    //Method 1 using http
    //return{
    //    getEvent:function(successCallBack){
    //        $http({method:'GET',url:'/data/event/1'})
    //            .success(function(data, status, header, config){
    //
    //                successCallBack(data);
    //            }).error(function(data, status, header, config){
    //
    //                $log.warn(data, status, header, config)
    //            });
    //    }
    //};

    //Method 2 using http
    //return{
    //    getEvent:function(){
    //       return $http({method:'GET',url:'/data/event/1'});
    //    }
    //};
})
;
