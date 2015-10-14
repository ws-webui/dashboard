(function () {
    'use strict';

    var module = angular.module('qorDash.docker.domain.dockers.menu.info', [
        'ui.router',
        'qorDash.docker.domain.dockers.menu.info.events'
    ]);

    module.config(appConfig);

    appConfig.$inject = ['$stateProvider'];

    function appConfig($stateProvider) {
        $stateProvider
            .state('app.docker.domains.domain.dockers.menu.info', {
                url: '/info',
                templateUrl: 'app/modules/docker/info/info.html',
                controller: 'DockerInfoController',
                authenticate: true
            })
    }
})();
