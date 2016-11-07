angular.module('library.controllers',['ui.router']).controller('mainController',function($scope,$state){
        $scope.goToCollections = function(){    
            $state.go('collections.categories');
        }
    });