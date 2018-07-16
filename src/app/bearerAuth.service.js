function bearerAuthService(authService){
    return {
        'request': (config) => {
            authService.getToken();            
            let storageToken = localStorage.token;
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${storageToken}`;
            return config;
        },
    }
}

export default bearerAuthService;