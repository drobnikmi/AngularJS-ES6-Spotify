import app from './app.module';
describe('test module', ()=>{
    describe('test controller', ()=>{
        beforeEach(angular.mock.module("app"));
  
        let ctrl;
  
        beforeEach(inject(function($controller){
          ctrl = $controller('firstController');
        }));

        it('should return text value', ()=>{
            expect(ctrl.test).toBe('test');
        });

        it('should be defined', ()=>{
            expect(ctrl).toBeDefined();
        });

    });
  })