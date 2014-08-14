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
    'ngTouch',
    'firebase'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsController'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewController'
      })
      .when('/register', {
        templateUrl: '/views/register.html',
        controller: 'AuthController'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
  app.constant('FIREBASE_URL', 'https://amber-torch-3049.firebaseio.com/');
