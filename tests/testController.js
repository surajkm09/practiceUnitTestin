describe('passwordController',function(){
    beforeEach(module('demo'));
    var $controller ; 

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_
    }))

    describe('$scope.grade',function(){
        it('set password greater than 8 characters',function(){
            var $scope ={} ; 
            var controller =$controller('demoController',{$scope:$scope});
            $scope.password="sadasdasdsadsafd";
            $scope.grade()
            expect($scope.strength).toEqual('strong');
        })
    })
})