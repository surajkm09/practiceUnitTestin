var app = angular.module('demo');

app.controller('demoController',function(){
    $scope.strength ='low' ; 
    $scope.password ='assad';
    $scope.grade = function(){
        if($scope.password.length >=8)
        {
            $scope.strength ='high'
        }
        else {
            $scope.strength ='low'
        }
    }
});