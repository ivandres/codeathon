'use strict';

//Just remove the example module here to use this project as your base angular app!
angular
    .module('ngApp', [
        'mgcrea.ngStrap',
        'ngRoute',
        'example',
        'enrollment'
    ])
    .controller('appController', function($scope) {
        $scope.message = "This is your home page.";
    }
);


