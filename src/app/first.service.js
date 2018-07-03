class FirstService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
    }
    getData() {
        return this.$http.get('https://api.spotify.com/v1/me').then(resp => resp.data);
    };
    getBand() {
        return this.$http.get('https://api.spotify.com/v1/search?type=album&query=otsochodzi').then(resp => resp.data);
    };
}

export default FirstService;

