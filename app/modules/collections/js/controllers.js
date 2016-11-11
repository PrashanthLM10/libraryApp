angular.module('library.collections.controllers',['library.collections.services','ngAnimate',"ui.router"],function($httpProvider){
    //$httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
});
angular.module('library.collections.controllers').controller('collectionsController',function($scope){

}).controller('categoriesController',function($scope,categoriesService){
        categoriesService.getCollections().success(function(data,status,config,headers){
                    $scope.categories = data;
            }).error(function(data,status,config,headers){
                console.log("getCollections:Error");
            });

}).controller('booksController',function($scope,booksService,$stateParams,$state){
                booksService.getBooksForCollection($stateParams.id).success(function(data,status,config,headers){
                        $scope.booksInCollection = data;
                }).error(function(data,status,config,headers){

                });

                $scope.loadBookInfo =  function(name,bookId,category){
                    $state.go('collections.bookInfo',{permaLink : this.getPermaLink(name),bookId:bookId,id:category});
                }.bind(this);

                this.getPermaLink = function(name){
                    return name.replace(/[^a-zA-Z0-9 :]/g, " ").replace(/\s\s+/g, ' ').replace(/ /g,"-");
                }

});
angular.module('library.collections.controllers').controller('booksInfoController',function($scope,$stateParams){
        console.log($stateParams);
});