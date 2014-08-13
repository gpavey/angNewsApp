'use strict';

/**
 * @ngdoc function
 * @name angNewsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angNewsAppApp
 */
angular.module('angNewsAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
