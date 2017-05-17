(function () {

    'use strict'

    angular
        .module('authApp')
        .directive('toolbar', toolbar);

    function toolbar() {
        return {
            templateUrl: 'Components/toolbar/toolbar.tpl.html',
            controller: toolbarController,
            controllerAs: 'toolbar'
        }

    }

    function toolbarController () {
        
    }
})();