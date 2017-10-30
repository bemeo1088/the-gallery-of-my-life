var myApp = angular.module('myApp', []);

myApp.controller('welcomeController', function ($scope){
    
   
    $scope.hides = [false, false, false, false, false, false];
    $scope.ShowHide = function (number) {
        $scope.hides[number] = !$scope.hides[number];
    }
    $scope.like = function (picture) {
        picture.like +=1;
    }
    $scope.pictures = [{ name: "Our first trip to Minehaha Falls", pic: "pic-1.png", like: 0, index:0},
                    {name: "Autumn in Richmond, VA", pic: "pic-2.png", like: 0, index:1},
                    {name: "Autumn in Richmond, VA", pic: "pic-3.png", like: 0, index:2},
                    {name: "Just a beautiful day at Minnesota State Park", pic: "pic-4.png", like: 0, index:3},
                    {name: "The beautiful Hanging Lake in Colorado", pic: "pic-5.png", like: 0, index:4},
                    {name: "Hiking in Aspen, CO to celebrate our wedding anniversary", pic: "pic-6.png", like: 0, index:5}];
   
});