import angular from 'angular';
import uiRouter from 'angular-ui-router';
import detailComponent from './detail.component';

import * as _ from 'lodash';

let detailModule = angular.module('detail', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('detail', {
      url: '/detail/:id',
      component: 'detail',
      resolve: {
        pollInfo: ($stateParams) => {
          let data = [
            {
              id: 1,
              name: 'Sample Name 1',
              question: 'Lorem ipsum',
              answer: 'Lorem ipsum',
              audience: 'Lorem ipsum',
              start: '11/8/2016',
              end: '11/8/2016',
              total: 30,
              completed: 20,
              status: 'Active'
            },
            {
              id: 2,
              name: 'Sample Name 2',
              question: 'Lorem ipsum',
              answer: 'Lorem ipsum',
              audience: 'Lorem ipsum',
              start: '11/8/2016',
              end: '11/8/2016',
              total: 50,
              completed: 15,
              status: 'Scheduled'
            },
            {
              id: 3,
              name: 'Sample Name 3',
              question: 'Lorem ipsum',
              answer: 'Lorem ipsum',
              audience: 'Lorem ipsum',
              start: '11/8/2016',
              end: '11/8/2016',
              total: 0,
              completed: 0,
              status: 'Draft'
            },
            {
              id: 4,
              name: 'Sample Name 4',
              question: 'Lorem ipsum',
              answer: 'Lorem ipsum',
              audience: 'Lorem ipsum',
              start: '11/8/2016',
              end: '11/8/2016',
              total: 45,
              completed: 25,
              status: 'Completed'
            }
          ];
          
          return _.find(data, (record) => {
            return record.id == $stateParams.id;
          });
        }
      }
    });
})

.component('detail', detailComponent)

.name;

export default detailModule;