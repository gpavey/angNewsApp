'use strict';

/**
 * @ngdoc function
 * @name angNewsAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angNewsAppApp
 */
angular.module('angNewsAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
