'use strict';
//alert("inside cust-list.component.js start");

angular.
module('custList').
component('custList', {
  templateUrl: 'cust-list/cust-list.template.html',
  controller: function CustListController($scope, $http) {
  $http.get("http://localhost:8080/financials/services/Rest/account").then(function (response) {
      $scope.$ctrl.orderProp = 'id';
      $scope.names = response.data.value;
  }, function(response) {
      //Second function handles error
      alert("Error");
      $scope.content = "Something went wrong";      
  });
}});

//alert("inside cust-list.component.js done");
/*
angular.
module('custList').
component('custList', {
  templateUrl: 'cust-list/cust-list.template.html',
  controller: function CustListController($scope, $http) {
  $http.get("http://localhost:8080/financials/services/Rest/account").then(function (response) {
      $scope.names = response.data.value;
      this.orderProp = 'name';
  }, function(response) {
      //Second function handles error
      alert("Error");
      $scope.content = "Something went wrong";      
  });
}});
*/