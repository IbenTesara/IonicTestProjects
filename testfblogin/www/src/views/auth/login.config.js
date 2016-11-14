angular.module('starter.routes.auth', []).config(function ($stateProvider, $urlRouterProvider) {
   
    $stateProvider
        .state('tab.login', {
        url: '/login'
        , views: {
            'tab-login': {
                templateUrl: 'src/views/auth/login.index.view.html'
                , controller: 'AuthCtrl as vm'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/login');
});