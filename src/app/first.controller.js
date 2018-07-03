class firstController {
    constructor(FirstService) {
        'ngInject';
        this.test = 'test';
        this.firstService = FirstService;
    }
    meth() {
        this.firstService.getData().then((res) => {console.log(res)});
    }
    band() {
        this.firstService.getBand().then((res) => {console.log(res)});
    }
}

export default firstController;
