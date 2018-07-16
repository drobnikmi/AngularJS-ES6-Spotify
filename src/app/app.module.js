'use strict';
import angular from 'angular';
import homeController from './home.controller';
import albumService from './album.service';
import authService from './auth.service';
import bearerAuthService from './bearerAuth.service';

/** Style Dependency */
import '../assets/sass/style.scss';

export default (() => {
    angular.module('app', [])
      .controller('homeController', homeController)
      .service('albumService', albumService)
      .service('authService', authService)
      .factory('bearerAuthService', bearerAuthService)
      .config( ($httpProvider) => {
        $httpProvider.interceptors.push('bearerAuthService');
      });
})();

