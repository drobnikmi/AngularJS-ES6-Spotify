class albumService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
    }
    getUserData() {
        return this.$http.get('https://api.spotify.com/v1/me').then(resp => resp.data);
    };
    getAlbums() {
        return this.$http.get('https://api.spotify.com/v1/search?type=album&query=otsochodzi').then(resp => resp.data);
    };
}

export default albumService;

