angular.module('starter.factories.pouchdb', [])
.factory('pouchDB', function() {
    return new PouchDB('myApp');
    
});