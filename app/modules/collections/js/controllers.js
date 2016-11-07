angular.module('library.collections.controllers',['library.collections.services']).controller('collectionsController',function($scope){
        
}).controller('categoriesController',function($scope,categoriesService){
        categoriesService.getCollections().success(function(data,status,config,headers){
                console.log("getCollections:Success",data);                
            }).error(function(data,status,config,headers){
                console.log("getCollections:Error");
            });
})