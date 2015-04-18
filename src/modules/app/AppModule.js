'use strict';

//Just remove the example module here to use this project as your base angular app!
angular
    .module('ngApp', [
        'mgcrea.ngStrap',
        'ngRoute',
        'enrollment'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'modules/app/templates/home.html',
            controller: 'homeController'
        }).otherwise({
            redirectTo: '/'
        }).when('/example1', {
            templateUrl: 'modules/app/templates/example1.html',
            controller: 'example1Controller'
        }).when('/prices', {
            templateUrl: 'modules/app/templates/prices.html',
            controller: 'pricesController'
        }).when('/example2', {
            templateUrl: 'modules/app/templates/example2.html',
            controller: 'example2Controller'
        });
    }])
    .controller('appController', function($scope) {
        $scope.message = "This is your home page.";
    })
    .controller("TabController", function() {
		this.tab = 1;

		this.isSet = function(checkTab) {
			return this.tab === checkTab;
		};

		this.setTab = function(setTab) {
		this.tab = setTab;
		};
	})

    .controller('pricesController', function($scope) {
        $scope.overrideMessage = function () {
            $scope.message = "Hello from the example 1 partial, controller by controller 1!";
        }
    })
    .controller('searchController', function($scope, $modal, enrollmentService) {
        enrollmentService.getHealthPlanData().then(
            function(data) {
                $scope.healthData = data;
            }
        );

        $scope.update = function(search) {
            $scope.results = [];

            for (var category in $scope.healthData ) {
                for (var network in $scope.healthData[category]) {
                    for (var plan in $scope.healthData[category][network]) {
                        if (plan.toLowerCase().indexOf(search.value) == -1) {
                            delete $scope.healthData[category][network][plan];
                        }
                    }
                }
            }
            $modal({scope:$scope, template:'modules/app/templates/results.html', show:true});

        };

    })
    .controller('example1Controller', function($scope) {
        $scope.overrideMessage = function () {
            $scope.message = "Hello from the example 1 partial, controller by controller 1!";
        }
    })

    .controller('example2Controller', function($scope){
        $scope.message = "Hello from the example 2 partial, controller by controller 2!";

        $scope.list = [
            "USA",
            "Bulgaria",
            "France",
            "Spain"
        ];
       

        $scope.add = function() {
            if (event.keyCode == 13 && $scope.new) {
                $scope.list.push($scope.new);
                $scope.new = '';
            }
        };
        })
        
        
    .controller('sampleDataController', function($scope){
        $scope.message = "Hey there! This is the JSON Data Service Controller!";

        $scope.list = [
            "Health Data",
            "Dental DPPO",
            "Dental HMO"
        ];
       

        $scope.add = function() {
            if (event.keyCode == 13 && $scope.new) {
                $scope.list.push($scope.new);
                $scope.new = '';
            }
        };
        })

    .service('searchService', function($http, $q){
        var searchService = {
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
        return searchService;
    })
    .controller('homeController', function($scope, $modal){
        $scope.openBootstrap = function(){
            $modal({scope:$scope, template:'modules/app/templates/bootstrapinfo.html', show:true});
        };
        $scope.openComponents = function(){
            $modal({scope:$scope, template:'modules/app/templates/componentsinfo.html', show:true});
        };
        $scope.openMvc = function(){
            $modal({scope:$scope, template:'modules/app/templates/mvcinfo.html', show:true});
        };
    }
);

