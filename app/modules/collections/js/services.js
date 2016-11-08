angular.module('library.collections.services',[]).service('categoriesService',function($http){
        this.getCollections = function(){
            console.log("in collections");
            return $http.get('/collections');
        };
    });