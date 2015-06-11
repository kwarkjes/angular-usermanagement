'use strict';

/* Controllers */

var pkUsersController = angular.module('pkUsersController', []);

pkUsersController.controller('UsersListCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.deleteUser = function($event, id, $index) {
        $event.stopPropagation();
        $http.delete('http://localhost:8080/api/users/' + id).success(function() {
            $scope.users.splice($index, 1);
        });
    };

    $http.get('http://localhost:8080/api/users').success(function(data) {
        $scope.users = data;
        $scope.getAvatar = getAvatar;
    });
    $scope.orderProp = '_id';
}]);

pkUsersController.controller('UsersDetailCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
    $http.get('http://localhost:8080/api/users/' + $routeParams.userId).success(function(data) {
        $scope.user = data;
        $scope.user.avatar = getAvatar(data.avatar, data.email);
    });
}]);

pkUsersController.controller('UsersEditCtrl', ['$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams, $location) {
    $http.get('http://localhost:8080/api/users/' + $routeParams.userId).success(function(data) {
        $scope.user = data;
        $scope.user.avatar = getAvatar(data.avatar, data.email);
    });
    $scope.sendPost = function() {
        $http.put('http://localhost:8080/api/users/' + $routeParams.userId,
        $.param($scope.user)).success(function() {
            $location.path('/users');
        });
    };
}]);

pkUsersController.controller('UsersNewCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.user = {
        workingDays: [
            false,
            false,
            false,
            false,
            false
        ]
    };
    $scope.sendPost = function() {
        $http.post('http://localhost:8080/api/users', $.param($scope.user)).success(function() {
            $location.path('/users');
        });
    };
}]);

function getAvatar(avatar, email) {
    return avatar ? avatar : '//www.gravatar.com/avatar/' + md5(email) + '?s=200&d=identicon';
}
