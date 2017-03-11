/**
 * Created by Administrator on 3/7/2017.
 */

eventsApp.directive('eventThumbnail',function(){
    return{
        restrict:'E',
        replace:true,
        templateUrl:'/templates/directives/eventThumbnail.html',
        scope:{
            event:'=thumbnailEvent'
        }
    };
});