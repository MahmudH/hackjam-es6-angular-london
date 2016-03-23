// (function() {
  'use strict';

import common from './modules/common/index'
import book from './modules/book/index'
import NavController from './modules/common/nav/navcontroller'
import bookstoreDirective from './modules/common/bookstore/bookstoreDirective'
import bookservice from './modules/book/services/bookservice'

  angular.module('bookstore', ['common','ngRoute','book', 'ngMockE2E']);

  document.addEventListener('DOMContentLoaded',function(){
    angular.bootstrap(document.body, ['bookstore']);
  });

// })();

