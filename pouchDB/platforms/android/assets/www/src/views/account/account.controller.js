angular.module('starter.controllers.account', [])

.controller('AccountCtrl', function($scope,$translate) {
    var vm = this;
  vm.settings = {
    enableFriends: true
  };
    vm.lang = $translate.use();
    
    vm.changeLang= function(){
        $translate.use(vm.lang);
    }
    
});
