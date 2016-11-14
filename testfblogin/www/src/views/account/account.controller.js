angular.module('starter.controllers.account', ['ngOpenFB']).controller('AccountCtrl', function ($scope, $translate, ngFB, $state) {
    var vm = this;
    vm.settings = {
        enableFriends: true
    };
    vm.lang = $translate.use();
    vm.changeLang = function () {
        $translate.use(vm.lang);
    };
    vm.logout = function () {
        $state.go('tab.login');
        ngFB.logout(function (response) {});
    };
    ngFB.api({
        path: '/me'
        , params: {
            fields: 'id,name'
        }
    }).then(function (user) {
        vm.user = user;
    }, function (error) {
        alert('Facebook error: ' + error.error_description);
        $state.go('tab.login');
    });
});