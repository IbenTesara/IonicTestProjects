angular.module('starter.translate', [])
.config(function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.translations('en', {
        TITLE_WELCOME: 'Welcome to Ionic',
        TITLE_LANGUAGE:'Language',
        //OPTION
        OPTION_FRIENDS: 'Enable Friends'
    });
    $translateProvider.translations('nl', {
        TITLE_WELCOME: 'Welkom bij Ionic',
        TITLE_LANGUAGE: 'Taal',
        //OPTION
        OPTION_FRIENDS: 'Vrienden inschakelen'
    });
    $translateProvider.preferredLanguage('nl');
});