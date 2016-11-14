angular.module('starter.routes.actionsheet', []).config(function ($stateProvider) {
    $stateProvider.state('tab.actionsheet', {
        url: '/actionsheet'
        , views: {
            'tab-actionsheet': {
                templateUrl: 'src/views/actionsheet/actionsheet.index.view.html'
                , controller: 'ActionSheetCtrl as vm'
            }
        }
    });
});