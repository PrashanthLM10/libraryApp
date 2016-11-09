angular.module('library.collections.services',[]).service('categoriesService',function($http){
        this.getCollections = function(){
            return $http.get('/collections');
        };
    });