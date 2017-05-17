'use strict';

angular
.module('authApp', ['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])
.config(function($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'Components/home/home.tpl.html'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'Components/profile/profile.tpl.html',
            controller: 'profileController as user'
        })
})