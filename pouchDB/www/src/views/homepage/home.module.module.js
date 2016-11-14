/**
 * @param {type} angular
 * @returns {angular.module}
 * @author 
 * @since 9/16/2016
 */

(function () {
    'use strict';

    angular
        .module('app.HomeModuleModule', [])
        .config(config)
        .run(runBlock);

        /* @ngInject */
        function config() {
            // Your code here
        }

        /* @ngInject */
        function runBlock() {
            // Your code here
        }
})();
