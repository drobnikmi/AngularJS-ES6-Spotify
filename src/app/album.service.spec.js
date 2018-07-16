import app from './app.module';

describe('Album Service Test', ()=>{

    beforeEach(()=>{
        angular.mock.module("app");
        inject(function($provide) {
            $provide.service('albumService',function(){
                console.log('aa');
            });
        });
    });

  });