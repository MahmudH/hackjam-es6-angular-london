// (function() {
  'use strict';

import common from './modules/common/index'
import book from './modules/book/index'
import NavCtrl from './modules/common/nav/navcontroller'
import bookstoreDirective from './modules/common/bookstore/bookstoreDirective'
import bookservice from './modules/book/services/bookservice'
import bookdetails from './modules/book/details/bookdetailscontroller'
import bookAddCtrl from './modules//book/add/bookaddcontroller'
import bookListCtrl from './modules//book/list/booklistcontroller'

  angular.module('bookstore', ['common','ngRoute','book', 'ngMockE2E']);

  var mainBody = () => { angular.bootstrap(document.body, ['bookstore']); };

  // document.addEventListener('DOMContentLoaded',() => {
  //   angular.bootstrap(document.body, ['bookstore']);
  // });

  document.addEventListener('DOMContentLoaded', mainBody);

// })();
