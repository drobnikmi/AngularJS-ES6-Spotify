class homeController {
    constructor(albumService) {
        'ngInject';
        this.test = 'test';
        this.albumService = albumService
    }
    meth() {
        this.albumService.getUserData().then((res) => {console.log(res)});
    }
    band() {
        this.albumService.getAlbums().then((res) => {console.log(res)});
    }
}

export default homeController;
