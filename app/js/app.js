angular.module('library',['library.collections','library.controllers','ui.router']);
angular.module('library').config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
        $stateProvider.state('app',{
            url : '/home',
            templateUrl : 'partials/home.html',
            controller : 'mainController'
        }).state('collections',{
                url:'/collections',
                templateUrl : 'modules/collections/views/collections.html',
                controller : 'collectionsController'
        });
}]);
angular.module('library').run(['$state',function($state){
        $state.go('app');                
}])