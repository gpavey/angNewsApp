'use strict';
/* global app:true */
/**
 * @ngdoc overview
 * @name angNewsAppApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */
var app = angular.module('angNewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
