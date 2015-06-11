'use strict';

$(document).foundation();

var pkUsersApp = angular.module('pkUsersApp', [
    'ngRoute',
    'pkUsersController'
]);

pkUsersApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.post = { 'Content-Type': 'application/x-www-form-urlencoded' };
    $httpProvider.defaults.headers.delete = { 'Content-Type': 'application/x-www-form-urlencoded' };
    $httpProvider.defaults.headers.put = { 'Content-Type': 'application/x-www-form-urlencoded' };

    $routeProvider.
    when('/users', {
        templateUrl: 'templates/users.overview.html',
        controller: 'UsersListCtrl'
    }).
    when('/user/view/:userId', {
        templateUrl: 'templates/users.detail.html',
        controller: 'UsersDetailCtrl'
    }).
    when('/user/edit/:userId', {
        templateUrl: 'templates/user.edit.html',
        controller: 'UsersEditCtrl'
    }).
    when('/user/new', {
        templateUrl: 'templates/user.edit.html',
        controller: 'UsersNewCtrl'
    }).
    when('/user/delete/:userId', {
        controller: 'UsersDeleteCtrl'
    }).
    otherwise({
        redirectTo: '/users'
    });
}]);

/* App Module */
