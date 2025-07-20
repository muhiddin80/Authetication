export const auth = {
    isAuthenticated:false,
    login(fn) {
        auth.isAuthenticated = true;
        setTimeout(fn,500)
    },
    register(fn){
        auth.isAuthenticated = true;
        setTimeout(fn,500)
    },
    logout(fn){
        auth.isAuthenticated = false;
        setTimeout(fn,500)
    }
}