'use strict';

angular.module('enrollment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/enrollment', {
            templateUrl: 'modules/enrollment/templates/sampleData.html',
            controller: 'enrollmentController'
        });
    }])

    .controller('enrollmentController', function($scope, enrollmentService) {
        //The service returns a promise.

        $scope.message = "Discover the different insurance plans Cigna offers!";



        enrollmentService.getHealthPlanData().then(
            function(data) {
                $scope.healthData = data;

            }
        );

        enrollmentService.getDentalDPPOData().then(
            function(data) {
                $scope.dentalPPOData = data;
1            }
        );
        enrollmentService.getDentalDHMOData().then(
            function(data) {
                $scope.dentalDHMOData = data;
            }
        );

    })



    .service('enrollmentService', function($http, $q){
        var enrollmentService = {
            getHealthPlanData: function() {

                var deferred = $q.defer();
                $http.get('resources/healthPlanData').success(function(data) {
                    deferred.resolve(data);
                });
                return deferred.promise;
            },
            getDentalDPPOData: function() {

                var deferred = $q.defer();
                $http.get('resources/dentalPPOData').success(function(data) {
                    deferred.resolve(data);
                });
                return deferred.promise;
            },
            getDentalDHMOData: function() {

                var deferred = $q.defer();
                $http.get('resources/dentalDHMOData').success(function(data) {
                    deferred.resolve(data);
                });
                return deferred.promise;
            }
        };
        return enrollmentService;
    }

);
