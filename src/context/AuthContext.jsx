import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [UserDetails,setUserDetails] = useState({})
    const [token,setToken] = useState("")

    const login = (user,jwtToken) =>{
        setUserDetails(user)
        setToken(jwtToken)
        localStorage.setItem('user',JSON.stringify(user))
        Cookies.set('token',jwtToken)
    }
    const register = (user,jwtToken) =>{
        setUserDetails(user)
        setToken(jwtToken)
        localStorage.setItem('user',JSON.stringify(user))
        Cookies.set('token',jwtToken)
    }

    const logout = () =>{
        setUserDetails(null);
        setToken(null);
        localStorage.clear();
        Cookies.remove("token");
    }

    const isAuthenticated = !!UserDetails && !!token


    return (
        <AuthContext.Provider value={{UserDetails,token,isAuthenticated,login,register,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)