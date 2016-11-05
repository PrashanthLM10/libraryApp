angular.module('library',['library.controllers','ui.router']);
angular.module('library').config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
        $stateProvider.state('home'{
            url : '/home',
            templateUrl : 'partials/home.html',
            controller : 'mainController'
        });
}]);