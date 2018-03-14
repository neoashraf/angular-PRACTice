var app = angular.module('myApp',[]);
app.controller( 'scopePractice',function ($scope) {
    $scope.sortBy = 'name';
    $scope.reverse= false;
    $scope.Employees=[ {joined:'2000-12-02', name:'Ashraf', city:'Dhaka', salary:'30000'},{joined:'2013-12-02', name:'Xshraf', city:'Bhaka', salary:'34000'},{joined:'2005-12-02', name:'Pshraf', city:'Xhaka', salary:'60000'}];
    $scope.doSort=function (propName){
        $scope.sortBy = propName;
        $scope.reverse=!$scope.reverse;
    };
});