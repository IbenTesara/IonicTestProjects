angular.module('starter.controllers.auth', ['ngOpenFB']).controller('AuthCtrl', function ($scope, $ionicModal, $timeout, ngFB, $state, LoginService) {
    var vm = this;
    vm.fbLogin = function () {
        ngFB.login({
            scope: 'email,public_profile,publish_actions'
        }).then(function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                $state.go('tab.dash');
            }
            else {
                alert('Facebook login failed');
            }
        });
    };
    vm.log_pattern = LoginService.getLoginPattern();
    var lock = new PatternLock('#lockPattern', {
        onDraw: function (pattern) {
            if (vm.log_pattern) {
                LoginService.checkLoginPattern(pattern).success(function (data) {
                    lock.reset();
                    $state.go('tab.dash');
                }).error(function (data) {
                    lock.error();
                });
            }
            else {
                LoginService.setLoginPattern(pattern);
                lock.reset();
                vm.log_pattern = LoginService.getLoginPattern();
                vm.$apply(function () {
                    vm.log_pattern = LoginService.getLoginPattern();
                });
            }
        }
    });
});