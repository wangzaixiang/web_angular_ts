///<reference path="..\ts\angularjs\angular.d.ts"/>
/**
* Created by walt.wang on 2014/12/1.
*/
/// <reference path="../ts/jquery/jquery.d.ts"/>
/// <reference path="../ts/angularjs/angular.d.ts"/>
var demo2 = angular.module("demo2", []);

var Calculator = (function () {
    function Calculator($scope) {
        this.num1 = 10;
        this.num2 = 20;
        this.op = '+';
        $scope.$watch(this.calculate.bind(this));
    }
    Calculator.prototype.calculate = function () {
        switch (this.op) {
            case '+':
                this.result = this.num1 + this.num2;
                break;
            case '-':
                this.result = this.num1 - this.num2;
                break;
            case '*':
                this.result = this.num1 * this.num2;
                break;
            case '/':
                this.result = this.num1 / this.num2;
                break;
        }
    };
    return Calculator;
})();

demo2.controller("Calculator", function ($scope) {
    $scope["ctrl"] = new Calculator($scope);
});
//# sourceMappingURL=demo2.js.map
