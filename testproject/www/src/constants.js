angular.module('starter.translate', [])
.config(function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.translations('en', {
        TITLE_WELCOME: 'Welcome to Ionic',
        TITLE_LANGUAGE:'Language',
        TITLE_ACTIONSHEET: 'Modify client',
        //OPTION
        OPTION_FRIENDS: 'Enable Friends',
        //TEXT
        TEXT_CANCEL:'Cancel',
        TEXT_SHARE: 'Share',
        TEXT_BLOCK: 'Block',
        TEXT_DELETE: 'Delete'
    });
    $translateProvider.translations('nl', {
        TITLE_WELCOME: 'Welkom bij Ionic',
        TITLE_LANGUAGE: 'Taal',
        TITLE_ACTIONSHEET: 'Pas klant aan',
        //OPTION
        OPTION_FRIENDS: 'Vrienden inschakelen',
        //TEXT
        TEXT_CANCEL:'Annuleren',
        TEXT_SHARE: 'Delen',
        TEXT_BLOCK: 'Blokkeren',
        TEXT_DELETE: 'Verwijderen'
    });
    $translateProvider.preferredLanguage('nl');
});