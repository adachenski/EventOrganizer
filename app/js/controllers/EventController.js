/**
 * Created by Administrator on 2/26/2017.
 */

'use strict';

eventsApp.controller('EventController',function($scope){

    $scope.boolValue = true;
    $scope.snippet='<span style="color: red">Hi from snippet</span>';
    $scope.myStyle = {color:'red'};
    $scope.myClass='angularBlue';
    $scope.sortOrder = '';
    //$scope.sortFilter="";
    $scope.event={
        name:'Angular boot Camp',
        date:'1/1/2017',
        time:'10:30 am',
        location:{
            address:'617S 9th str',
            city:'San Jose',
            state: 'CA'
        },
        imageUrl:'./img/angularjs-logo.png',
        sessions:[
            {
                name:'Random name',
                creatorName:'Atanas Dachenski',
                duration:3,
                level:'Advanced',
                abstract:'In this session you will learn about directives Beginner',
                upVoteCount:0
            },
            {
                name:'Random name2',
                creatorName:'Pencho Toshev',
                duration:2,
                level:'Beginner',
                abstract:'In this session you will learn about directives',
                upVoteCount:20
            },
            {
                name:'Awesome Name',
                creatorName:'Petar Dachenski',
                duration:4,
                level:'Intermediate',
                abstract:'In this session you will learn about directives',
                upVoteCount:12
            },
            {
                name:'Random name4',
                creatorName:'Georgi Dachenski',
                duration:1,
                level:'Intermediate',
                abstract:'In this session you will learn about directives',
                upVoteCount:9
            },
        ]
    };

    $scope.voteUpSession = function(session){
        session.upVoteCount++;
    };

    $scope.voteDownSession = function(session){
        session.upVoteCount--;
    }

});