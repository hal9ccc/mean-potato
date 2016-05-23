'use strict';

angular.module('meanPotato2App.auth', [
  'meanPotato2App.constants',
  'meanPotato2App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
