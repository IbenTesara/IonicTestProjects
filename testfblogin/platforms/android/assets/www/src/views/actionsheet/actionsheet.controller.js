angular.module('starter.controllers.actionsheet', [])
.controller('ActionSheetCtrl', function($scope, Chats,$ionicActionSheet,$translate) {
    var vm = this;
  vm.chats = Chats.all();
  vm.showPanel = function() {
    var sheet = $ionicActionSheet.show({
       buttons:[
           {text: '<b>'+$translate.instant('TEXT_SHARE',$translate.use())+'</b>'},
           {text: $translate.instant('TEXT_BLOCK',$translate.use())}
       ],
        destructiveText:$translate.instant('TEXT_DELETE',$translate.use()),
        titleText : $translate.instant('TITLE_ACTIONSHEET',$translate.use()),
        canceltText: $translate.instant('TEXT_CANCEL',$translate.use()),
        cancel: function(){
            
        },
        buttonClicked: function(index){
        return true;
    }
    });
  };
});