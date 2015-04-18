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

