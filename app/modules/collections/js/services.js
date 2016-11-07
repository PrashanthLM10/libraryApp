angular.module('library.collections.services',[]).service('categoriesService',function($http){
        this.getCollections = function(){
            return $http({method:'GET',url:'/collections'});            
        };
    });