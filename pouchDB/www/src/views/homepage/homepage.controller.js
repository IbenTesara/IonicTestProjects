angular.module('starter.controllers.homepage', []).controller('DashCtrl', function ($scope, pouchDB, $interval) {
    var vm = this;
    var dbLocal = new PouchDB('ionic');
    var dbRemote = new PouchDB('http://localhost:5984/ionic');
    vm.item = "";
    vm.items = [];
    vm.add = function () {
        vm.item._id = String(new Date().getTime());
        var obj = angular.copy(vm.item);
        dbLocal.put(obj).then(function (response) {
            vm.items.push(obj);
            $scope.$apply();
        }).catch(function (err) {
            console.log(err);
        });
        vm.item = {};
    };
    
    databaseFunc();
     syncMyDB();
    $interval(databaseFunc, 10000);

    function databaseFunc() {
        getAllDocs();
    }

    function getAllDocs() {
        dbLocal.allDocs({
            include_docs: true
        }).then(function (result) {
            vm.items=[];
            console.log('re    var dbLocal = new s is', result.rows);
            for (var i = 0; i < result.rows.length; i++) {
                var obj = {
                    "name": result.rows[i].doc.name
                };
                    vm.items.push(obj);
                $scope.$apply();
            }
            console.log(vm.items);
        }).catch(function (err) {
            console.log(err);
        });
    }

    function syncMyDB() {
        console.log("Syncing starting");
        dbLocal.sync(dbRemote, {
            live: true
            , retry: true
        }).on('change', function (change) {
            console.log(change)
        }).on('paused', function (info) {
            console.log(info);
        }).on('active', function (info) {
            console.log(info);
        }).on('error', function (err) {
            console.log(err);
        });
    };
});