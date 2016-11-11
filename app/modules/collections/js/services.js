angular.module('library.collections.services',[]).service('categoriesService',function($http){
        this.getCollections = function(){
            return $http.get('/collections');
        };
    }).service('booksService',function($http){
        this.getBooksForCollection = function(collection){
            //return $http({url:'/booksForCollection',method:'POST',data:{'collection': collection}});
            return $http.post('/booksForCollection',{'collection': collection});
        };
    });