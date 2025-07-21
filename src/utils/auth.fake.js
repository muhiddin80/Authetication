import axios from "axios";

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

export const LoginApiFn = async ({email,password}) =>{
    let info;
    try {
        console.log(email,password)
        console.log('hello')
        info = await axios.post('http://localhost:4000/auth/login',{
            email:email,
            password:password
        })
        // console.log(info)
    } catch (error) {
        console.log(error.response.data.message)
    }
    return info.data
}

export const registerApiFn = async ({name,email,password}) =>{
    let info;
    try {
        info = await axios.post('http://localhost:4000/auth/register',{
            email,
            name,
            password
        })
    } catch (error) {
        console.log(error.response.data.message)
    }
    return info.data
}