import angular from 'angular';
import Home from './home/home';
import Create from './create/create';
import Login from './login/login';
import Detail from './detail/detail';

let componentModule = angular.module('app.components', [
  Home,
  Create,
  Login,
  Detail
])
  
.name;

export default componentModule;
