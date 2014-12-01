
var demo2 = angular.module("demo2", []);

demo2.controller("Calculator", function($scope){
    function init() {
        $scope.num1 = 10;
        $scope.num2 = 20;
        $scope.op = '+';
        $scope.$watch(calculate, null);
    };

    function calculate(){
        var result = $scope.result;
        switch($scope.op){
            case '+': result = $scope.num1 + $scope.num2; break;
            case '-': result = $scope.num1 - $scope.num2; break;
            case '*': result = $scope.num1 * $scope.num2; break;
            case '/': result = $scope.num1 / $scope.num2; break;
        }
        $scope.result = result;
    }

    function updateResult(newValue, oldValue, scope){
        $scope.result = newValue;
    }

    init();

} );