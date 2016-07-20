//组件
//导航条
jcApp.directive('nav', function () {
    return{
      restrict:'AE',
      scope:{
        
      },      
      templateUrl:function(){        
        return './pages/nav.html';
      }
    }
});
jcApp.controller('navCtrl',['$scope','$state','$rootScope',function($scope,$state,$rootScope){

}]);

//头部
jcApp.directive('header', function () {
    return{
      restrict:'AE',
      scope:{
        
      },      
      templateUrl:function(){        
        return './pages/header.html';
      }
    }
});
jcApp.controller('headerCtrl',['$scope','$state','$rootScope',function($scope,$state,$rootScope){

}]);

//首页
jcApp.config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: function(){
          return './pages/home.html';
      	},
      });    
});

jcApp.controller('homeCtrl',['$scope','$state','$rootScope','$http',function($scope,$state,$rootScope,$http){
	$rootScope.pagetitle='首页';
  
}]);

