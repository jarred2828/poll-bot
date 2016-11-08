import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import 'angular-material-data-table';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import 'angular-material/angular-material.css';
import 'angular-material-data-table/dist/md-data-table.css';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    ngMaterial,
    'md.data.table'
  ])
  .config(($locationProvider, $urlRouterProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider.otherwise(($injector) => {
      var $state = $injector.get('$state');
      $state.go('home');
    });
  })

  .component('app', AppComponent);
