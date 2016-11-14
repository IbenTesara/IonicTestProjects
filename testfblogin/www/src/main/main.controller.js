angular.module('starter.controllers.main', ['ngOpenFB'])
.controller('MainCtrl', function($scope, $translate,ngFB) {
    var vm = this;
    vm.isLoggedin = false;
    ngFB.getLoginStatus(function(response){
        if(response.status==='connected'){
            vm.isLoggedin=true;
        }
    });
});