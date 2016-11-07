angular.module('library.collections',['library.collections.controllers','ui.router']);
angular.module('library.collections').config(function($stateProvider,$urlRouterProvider,$locationProvider){
        $stateProvider.state('collections.categories',{
                url:'/categories',
                templateUrl:'modules/collections/views/categories.html',
                controller:'categoriesController'
        });
        $urlRouterProvider.otherwise('/categories');
        $locationProvider.html5Mode(false);
    
    });