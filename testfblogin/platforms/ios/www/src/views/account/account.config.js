angular.module('starter.routes.account', []).config(function ($stateProvider) {
    $stateProvider.state('tab.account', {
        url: '/account'
        , views: {
            'tab-account': {
                templateUrl: 'src/views/account/account.index.view.html'
                , controller: 'AccountCtrl as vm'
            }
        }
    });
});