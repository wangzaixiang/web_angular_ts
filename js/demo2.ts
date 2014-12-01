///<reference path="..\ts\angularjs\angular.d.ts"/>
/**
 * Created by walt.wang on 2014/12/1.
 */
/// <reference path="../ts/jquery/jquery.d.ts"/>
/// <reference path="../ts/angularjs/angular.d.ts"/>

var demo2 = angular.module("demo2", []);

class Calculator  {

    num1: number = 10;
    num2: number = 20;
    op: string = '+';
    result: number;

    constructor($scope: ng.IScope){
        $scope.$watch(this.calculate.bind(this));
    }

    calculate() {
        switch(this.op) {
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
    }

}

demo2.controller("Calculator", function($scope: ng.IScope){

    $scope["ctrl"] = new Calculator($scope);

});