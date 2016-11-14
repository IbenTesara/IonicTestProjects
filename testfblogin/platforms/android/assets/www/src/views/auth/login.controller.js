angular.module('starter.controllers.auth', ['ngOpenFB']).controller('AuthCtrl', function ($scope, $ionicModal, $timeout, ngFB,$state) {
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
});