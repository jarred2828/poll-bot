import angular from 'angular';
import uiRouter from 'angular-ui-router';
import editComponent from './edit.component';

let editModule = angular.module('edit', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('edit', {
      url: '/edit/:id',
      component: 'edit'
    });
})

.component('edit', editComponent)
  
.name;

export default editModule;
