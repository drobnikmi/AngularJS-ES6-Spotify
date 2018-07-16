class authService {
    constructor(){
        'ngInject';
        this.token;
    }
    getToken(){
        this.token = localStorage.getItem('token');
        if(!this.token){
        const clientId = 'e9923b08192248c68cba6f64b9a14fdd';
        const redirectUri = 'http://localhost:8080/';
        window.location.replace(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}`);
        let tokenMatch = window.location.hash.match(/#access_token=(.*?)&/);
        let Apitoken = tokenMatch[1];
        localStorage.setItem('token', Apitoken);
        window.location.reload();
        }
        return this.token;
    }
}

export default authService;