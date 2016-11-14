// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter',
               ['ionic',
                'pascalprecht.translate',
                'ngOpenFB',
                //Routes
                'starter.routes.home',
                'starter.routes.chat',
                'starter.routes.account',
                'starter.routes.actionsheet',
                'starter.routes.auth',
                //Controllers
                'starter.controllers.main',
                'starter.controllers.chatdetail',
                'starter.controllers.homepage',
                'starter.controllers.chat',
                'starter.controllers.account',
                'starter.controllers.actionsheet',
                'starter.controllers.auth',
                //Services
                'starter.services.chatresource',
                'starter.services.auth',
                //Translation
                'starter.translate'  
               ])
    
    .run(function ($ionicPlatform,ngFB) {
    ngFB.init({appId: '100803353715192'});
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
});