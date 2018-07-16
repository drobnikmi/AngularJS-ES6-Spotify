import app from './app.module';
describe('test module', ()=>{
    describe('test controller', ()=>{
        let ctrl,
        $httpBackend;

        beforeEach(()=>{
            angular.mock.module("app");
            inject(($controller, $httpBackend)=>{
                ctrl = $controller('homeController');
                $httpBackend = $httpBackend;
            });
        });

        afterEach(()=>{
            // $httpBackend.verifyNoOutstandingExpectation();
            // $httpBackend.verifyNoOutstandingRequest();
        });

        it('should return text value', ()=>{
            expect(ctrl.test).toBe('test');
        });

        it('should be defined', ()=>{
            expect(ctrl).toBeDefined();
        });

        it('should return user data', ()=> {
            $httpBackend.expectGet("https://api.spotify.com/v1/me", {Authorization: 'Bearer BQDYy94-Ef6rXMJnhW5bNtonTv1bvnqJyxZjknHgv6_IUPUNtIrBKA1SuvnDqmKR0OHuCKYKghAJoHAMQG7Hc-NDr1Ntf0wk-rKQw7diYrH4RO8n8UJeJBWxDPyjT9pegAJ3jn-l9aNx3BTK1ERyQk9OTCHcE80'});
        });
    });
  })