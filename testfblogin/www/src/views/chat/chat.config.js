angular.module('starter.routes.chat', []).config(function ($stateProvider) {
    $stateProvider.state('tab.chats', {
        url: '/chats'
        , views: {
            'tab-chats': {
                templateUrl: 'src/views/chat/chat.index.view.html'
                , controller: 'ChatsCtrl'
            }
        }
    }).state('tab.chat-detail', {
        url: '/chats/:chatId'
        , views: {
            'tab-chats': {
                templateUrl: 'src/views/chat/detail/chat.detail.index.view.html'
                , controller: 'ChatDetailCtrl'
            }
        }
    });
});